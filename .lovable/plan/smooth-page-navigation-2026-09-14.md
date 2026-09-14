# Smooth Page Navigation

Add a restrained transition whenever visitors move between portfolio pages, while ensuring only the destination page remains in the layout.

## Experience
- Fade and lift each destination page into place with a short, polished animation.
- Key the page container by its current path so rapid navigation replaces content instead of accumulating layers.
- Keep the shared navigation, footer, chatbot, and project backgrounds stable during page changes.
- Disable the effect for visitors who prefer reduced motion.

## Technical details
- Apply the transition to the route-content container in the shared site layout.
- Use a CSS keyframe animation with opacity and a small vertical offset; do not retain an outgoing-page copy.
- Keep the effect compositor-friendly and prevent transition layers from intercepting interactions.

## Verification
- Navigate repeatedly across desktop and mobile links, including rapid clicks.
- Confirm one page is present at a time, scroll position resets correctly, and no content overlaps.
- Confirm reduced-motion behavior and a clean build.
