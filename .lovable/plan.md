# Portfolio Rebuild — Ahmed Muhammed Seid

Recreate your single-file HTML portfolio as a proper, componentized TanStack Start site, keeping all your real content but upgrading the polish, adding your circular hero photo, swapping language icons for native-script letters, and making it flawless on every screen size.

## What stays the same
- All your content: hero intro, About + stats, Tech Stack cube, Building-the-Future banner, Experience timeline, Projects carousel, Skills, Education, Languages, Certificates, Contact, footer.
- The dark aesthetic: deep navy/black background with the red (#e94560) → purple (#533483) → blue (#0f3460) gradient system.
- Signature effects: particle canvas, typing headline, scroll-reveal animations, animated stat counters, rotating 3D cube, project carousel, timeline.
- Fonts: Space Grotesk (body/headings) + JetBrains Mono (accents/labels).

## Key changes you asked for
1. **Circular hero photo** — your uploaded portrait placed at the top of the hero above your name, in a circular frame with a glowing gradient ring, subtle float animation, and a soft blend (border glow + shadow) so it sits naturally in the dark theme. Uploaded via Lovable Assets (CDN), not committed as a binary.
2. **Language letters instead of icons** — the three language circles show native script: **En** (English), **ع** (Arabic), **አ** (Amharic), each keeping the gradient-ring hover effect.
3. **Full mobile responsiveness** — verified from 320px phones up to large desktops: responsive nav with a working hamburger menu (the original just hid links on mobile), fluid type, stacked grids, touch-friendly carousel, correctly scaled cube, and no horizontal overflow.

## "Make it better" polish
- Real mobile hamburger menu with smooth open/close (original had none).
- Smoother, accessibility-aware animations (respects `prefers-reduced-motion`; particle count/cursor scaled down or disabled on mobile for performance).
- Tightened spacing, consistent card styling, better focus states and tap targets.
- Proper SEO: page title, meta description, Open Graph + Twitter tags, semantic headings, image alt text.
- Contact email/phone wired as real `mailto:`/`tel:` links. Social links kept as placeholders (`#`) since none were provided — send me the URLs anytime and I'll drop them in.

## Technical approach
- Move color tokens, gradients, and shadows into `src/styles.css` as semantic design tokens (oklch), and load Space Grotesk + JetBrains Mono via `@fontsource` packages.
- Build the page in `src/routes/index.tsx` composed of focused section components under `src/components/portfolio/` (Nav, Hero, About, TechCube, Timeline, Projects, Skills, Education, Languages, Certificates, Contact, Footer).
- Reimplement particles, typing effect, counters, carousel, and scroll-reveal as small React hooks/`useEffect` logic (client-only, guarded for SSR).
- Font Awesome icons rendered via `lucide-react` equivalents (or inline SVGs) to avoid a CDN dependency; language circles use plain text glyphs.
- Set head metadata (title/description/OG/Twitter) in the route `head()`.
- Add your photo through the Lovable Assets CLI and reference the generated pointer.

## Verification
- Typecheck/build passes.
- Drive the preview with Playwright at mobile (375px), tablet (768px), and desktop (1280px) widths; screenshot each to confirm the hero photo, language letters, nav menu, and all sections render with no overflow.

Once you approve, I'll build it and share screenshots.
