# Immersive Projects Page

Turn the Projects page into a cinematic, scroll-driven showcase where every project fills the viewport and changes the atmosphere of the entire page.

## Experience
- Replace the horizontal carousel with one full-screen vertical chapter per project.
- Keep each project screenshot fixed behind the navigation, project content, and footer while its chapter is active.
- Crossfade and gently scale backgrounds as scrolling activates the next project, with a dark readability veil tailored to the screenshot.
- Use soft scroll snapping so wheel, trackpad, touch, and keyboard scrolling naturally settle on a complete project.
- Present each project with editorial typography, number, tags, description, and its existing external link.
- Add a slim project-progress rail and a clear scroll cue without cluttering mobile screens.
- Let the final project background continue behind the footer so the page remains one continuous visual world.

## Technical details
- Track the active project with `IntersectionObserver`, using the viewport midpoint to avoid rapid background flicker.
- Render all screenshot layers in a fixed page-level background stack and transition opacity/scale instead of changing a single CSS background URL.
- Make the Projects page opt into an immersive layout state so shared navigation and footer become transparent only on this route.
- Preserve reduced-motion support by disabling transforms and scroll animation where requested by the device.
- Keep all existing local project images and links; no backend or content changes.

## Verification
- Confirm every project activates from scrolling and displays the matching local screenshot.
- Check desktop and mobile layouts, navigation readability, footer coverage, touch scrolling, and absence of horizontal overflow.
- Confirm the page builds cleanly and project links remain usable.