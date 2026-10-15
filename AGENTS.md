<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the header logo in a CDN asset pointer and derive shared branding through global semantic CSS tokens, so navigation and page colors stay consistent.
- Resolve branding media from their CDN pointers against the published Lovable asset origin, because relative asset-serving paths do not exist on Vercel.
- Mount the opening animation once in the shared site layout with muted inline playback, reduced-motion bypass, and a bounded timeout, so navigation never replays it and media failures cannot block the portfolio.
