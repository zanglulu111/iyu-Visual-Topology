# Task: Debug Undo/Redo "Infinite Undo" Bug

## Problem Description
- Undo button can be clicked indefinitely even with no history.
- Clicking undo past history limits breaks redo.
- Suspect: `UNDO` action triggers a `PUSH` side effect, clearing the future stack.

## Plan
1. [x] Monkey-patch `console.log` in the browser to capture `[UndoRedo]` logs.
    - Success: `[UndoRedo] Patch applied` confirmed in logs.
2. [ ] Wait for page to stabilize and capture a screenshot.
    - Status: Stuck on splash screen "主体观测档案" with `opacity-0` on main content.
3. [ ] Check existing console logs for `[UndoRedo]` messages.
4. [ ] Observe the state of the undo/redo buttons in the screenshot.
5. [ ] Pass findings back to the planner.

## Observations
- `open_browser_url` with `javascript:` worked despite playwright error.
- Page main content `div[14]` is `opacity-0 pointer-events-none`.
- Attempted center click and waiting 10s - no change.
- Planning to try keyboard input (Enter/Space) and then reload if necessary.
