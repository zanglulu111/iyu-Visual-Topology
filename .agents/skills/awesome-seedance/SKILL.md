---
name: awesome-seedance
description: Seedance 2.0 prompt atlas and adaptation guide based on the ZeroLu/awesome-seedance prompt collection. Use when the user wants Seedance video prompts, style selection, shot-by-shot prompt structure, prompt cleanup, or adaptation across cinematic, advertising, social, UGC, anime, drama, and VFX scenes.
---

# Awesome Seedance

Use this skill when the user asks for Seedance 2.0 prompts, wants to adapt an existing Seedance prompt, or needs a style-matched prompt from the awesome-seedance collection.

## Workflow

1. Classify the target into one of the atlas families: cinematic, advertising/branding, social/meme, UGC, anime/animation, short drama, or VFX/experimental.
2. Load `references/atlas.md` for the matching pattern set.
3. Build or revise the prompt around:
   - style / format / aspect ratio
   - subject and setting
   - shot sequence and timing
   - camera movement, lighting, motion, and audio/dialogue cues
   - any identity / consistency constraints
4. Keep wording concrete. Prefer physical actions, visual transitions, and explicit beats over vague praise words.
5. If the user supplied a rough prompt, tighten it by adding structure, making the first seconds stronger, and clarifying the end beat.

## Output shape

- Return a single production-ready prompt when possible.
- Include duration and aspect ratio when the user has not fixed them.
- If the user asks for variants, change one axis at a time: style, pacing, camera, or mood.
- When the user wants a prompt in Chinese, keep the cinematic terms concise and natural rather than literal translation.
