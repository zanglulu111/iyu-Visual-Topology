export type TaskStatus = 'generating' | 'completed' | 'failed' | 'aborted';

export interface GenerationTask {
    id: string;
    name: string;
    startTime: number;
    endTime?: number;
    status: TaskStatus;
    abortController?: AbortController;
}

type Listener = (tasks: GenerationTask[]) => void;

class TaskManager {
    private tasks: GenerationTask[] = [];
    private listeners: Listener[] = [];

    subscribe(listener: Listener) {
        this.listeners.push(listener);
        listener(this.tasks);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify() {
        this.listeners.forEach(l => l([...this.tasks]));
    }

    startTask(name: string): GenerationTask {
        const id = Math.random().toString(36).substr(2, 9);
        const task: GenerationTask = {
            id,
            name,
            startTime: Date.now(),
            status: 'generating',
            abortController: new AbortController()
        };
        this.tasks.push(task);
        this.notify();
        return task;
    }

    updateTaskStatus(id: string, status: TaskStatus) {
        const task = this.tasks.find(t => t.id === id);
        if (task && task.status === 'generating') {
            task.status = status;
            if (status !== 'generating') {
                task.endTime = Date.now();
            }
            this.notify();
        }
    }

    abortTask(id: string) {
        const task = this.tasks.find(t => t.id === id);
        if (task && task.status === 'generating') {
            if (task.abortController) {
                task.abortController.abort();
            }
            this.updateTaskStatus(id, 'aborted');
        }
    }

    clearCompletedTasks() {
        this.tasks = this.tasks.filter(t => t.status === 'generating');
        this.notify();
    }

    getTasks() {
        return this.tasks;
    }
}

export const globalTaskManager = new TaskManager();

// Helper to wrap async functions with TaskManager and AbortController
export const runWithTask = async <T>(taskName: string, asyncFn: (signal: AbortSignal) => Promise<T>): Promise<T> => {
    const task = globalTaskManager.startTask(taskName);
    const signal = task.abortController!.signal;

    try {
        // Create a promise that rejects when aborted
        const abortPromise = new Promise<never>((_, reject) => {
            const abortHandler = () => {
                signal.removeEventListener('abort', abortHandler);
                reject(new Error("AbortError"));
            };
            if (signal.aborted) {
                reject(new Error("AbortError"));
            } else {
                signal.addEventListener('abort', abortHandler);
            }
        });

        // Race the actual workload against the abort promise
        const result = await Promise.race([
            asyncFn(signal),
            abortPromise
        ]);

        globalTaskManager.updateTaskStatus(task.id, 'completed');
        return result;
    } catch (error: any) {
        if (error.message === "AbortError" || error.name === "AbortError") {
            globalTaskManager.updateTaskStatus(task.id, 'aborted');
            throw new Error("AbortError");
        } else {
            globalTaskManager.updateTaskStatus(task.id, 'failed');
            throw error;
        }
    }
};

export const getCallerName = (): string => {
    try {
        const stack = new Error().stack;
        if (stack) {
            const lines = stack.split('\n');
            const callerLine = lines[3] || '';
            const match = callerLine.match(/at\s+([^\s]+)/);
            if (match && match[1]) {
                const name = match[1].split('.').pop() || "AI Task";
                return name === "retryWithBackoff" ? "AI Generation Task" : name;
            }
        }
    } catch (e) {}
    return "AI Generation Task";
};
