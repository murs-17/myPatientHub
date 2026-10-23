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

- Keep the two content pages in TanStack leaf routes with a shared patient shell; this keeps navigation and responsive layout consistent.
- Keep header and sidebar chrome behavior (fixed glass header, icon-only mini-sidebar collapse) in the shared shell and shared stylesheet rather than per page, so every dashboard view stays identical; this keeps page routes free of duplicated layout logic.
- Keep demonstration bookings in browser-local storage and offer interactions frontend-only; no real booking or payment service is connected.
- Define presentation colors and shadows as semantic stylesheet tokens; this preserves the reference design consistently across controls.
- Use one shared visitor dataset for the Procedures Taken and Treatments Taken charts so their monthly values stay consistent.

- Author all source, tests, and configuration in JavaScript/JSX, and generate an untyped JavaScript route tree; this keeps the complete project consistent with its JavaScript source requirement.
- Apply the narrow build-time Start generator compatibility guard before loading the Vite plugins, and omit the wrapper's TypeScript-only path reader; this prevents TypeScript registration syntax in the generated JavaScript tree while preserving the existing runtime and alias.

- Deploy target: `vite.config.js` sets `nitro: { preset: "vercel" }` so a plain build on Vercel produces a Vercel-runnable build; Lovable's own build overrides this to Cloudflare, so the line is harmless there.
