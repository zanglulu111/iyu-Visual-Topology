/**
 * SoundManager Utility - High-Performance Audio Interface
 * Uses Web Audio API for near-zero latency sound playback.
 */

interface ActiveSource {
  source: AudioBufferSourceNode;
  gainNode: GainNode;
  name: string;
}

class SoundManager {
  private context: AudioContext | null = null;
  private buffers: Map<string, AudioBuffer> = new Map();
  private activeSources: Map<string, ActiveSource[]> = new Map();
  private isLoading: Set<string> = new Set();
  private masterGain: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.context = new AudioCtx();
        this.masterGain = this.context.createGain();
        this.masterGain.connect(this.context.destination);
      }
    }
  }

  public async resume() {
    if (this.context && this.context.state === 'suspended') {
      await this.context.resume();
    }
  }

  public async preload(name: string, url: string) {
    if (this.buffers.has(name) || this.isLoading.has(name) || !this.context) return;
    this.isLoading.add(name);
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.context.decodeAudioData(arrayBuffer);
      this.buffers.set(name, audioBuffer);
    } catch (error) {
      console.error(`Failed to load sound: ${name}`, error);
    } finally {
      this.isLoading.delete(name);
    }
  }

  public play(name: string, options: { 
    volume?: number, 
    loop?: boolean, 
    playbackRate?: number,
    stopExisting?: boolean 
  } = {}) {
    if (!this.context || !this.buffers.has(name)) return;

    if (this.context.state === 'suspended') {
      this.context.resume();
    }

    if (options.stopExisting) {
      this.stop(name, false); 
    }

    const buffer = this.buffers.get(name)!;
    const source = this.context.createBufferSource();
    const gainNode = this.context.createGain();
    
    source.buffer = buffer;
    source.loop = options.loop || false;
    source.playbackRate.value = options.playbackRate || 1.0;

    const targetVolume = options.volume !== undefined ? options.volume : 1.0;
    // Fast fade-in to avoid clicks
    gainNode.gain.setValueAtTime(0, this.context.currentTime);
    gainNode.gain.linearRampToValueAtTime(targetVolume, this.context.currentTime + 0.01);

    source.connect(gainNode);
    gainNode.connect(this.masterGain!);
    source.start(0);

    const activeSource: ActiveSource = { source, gainNode, name };
    if (!this.activeSources.has(name)) {
      this.activeSources.set(name, []);
    }
    this.activeSources.get(name)!.push(activeSource);

    source.onended = () => {
      this.removeActiveSource(name, activeSource);
    };

    return activeSource;
  }

  private removeActiveSource(name: string, activeSource: ActiveSource) {
    const list = this.activeSources.get(name);
    if (list) {
      this.activeSources.set(name, list.filter(item => item !== activeSource));
    }
  }

  public stop(name: string, fadeOut: boolean = false) {
    const list = this.activeSources.get(name);
    if (!list || list.length === 0) return;

    // Move sources to a temporary list so they don't get new volume updates
    const targets = [...list];
    this.activeSources.set(name, []);

    if (fadeOut && this.context) {
      const now = this.context.currentTime;
      targets.forEach(item => {
        item.gainNode.gain.cancelScheduledValues(now);
        item.gainNode.gain.setValueAtTime(item.gainNode.gain.value, now);
        // Clean exponential ramp down
        item.gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        setTimeout(() => {
          try {
            item.source.stop();
            item.source.disconnect();
            item.gainNode.disconnect();
          } catch (e) {}
        }, 150);
      });
    } else {
      targets.forEach(item => {
        try {
          item.source.stop();
          item.source.disconnect();
          item.gainNode.disconnect();
        } catch (e) {}
      });
    }
  }

  public setVolume(name: string, volume: number, fast: boolean = true) {
    const list = this.activeSources.get(name);
    if (list && this.context) {
      const timeConstant = fast ? 0.02 : 0.1;
      list.forEach(item => {
        item.gainNode.gain.setTargetAtTime(volume, this.context!.currentTime, timeConstant);
      });
    }
  }

  public setPlaybackRate(name: string, rate: number, fast: boolean = true) {
    const list = this.activeSources.get(name);
    if (list && this.context) {
      const timeConstant = fast ? 0.02 : 0.1;
      list.forEach(item => {
        item.source.playbackRate.setTargetAtTime(rate, this.context!.currentTime, timeConstant);
      });
    }
  }
}

export const soundManager = new SoundManager();
