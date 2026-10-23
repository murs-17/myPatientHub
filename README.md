# MyPatientHUB — Appointments and Find Marketplace

Two separate pages recreated from the MyPatientHUB reference using React 19, JavaScript (JS/JSX), Tailwind CSS v4, and TanStack Start. This is the converted existing project, not a rebuild.

## Pages and controls

- `/appointment`: shared monthly visitor summary charts, per-segment bar chart tooltips, month calendar, event details, browser-saved booking, cancellation, appointment lists, and CSV chart export.
- `/marketplace`: four sample offers, offer details, search, sortable results, entries-per-page selection, and pagination.
- `/` redirects to `/appointment`.
- Shared header, collapsible sidebar, and footer. Other sidebar sections are display-only and intentionally not implemented.
- Phone layouts stack appointment sections and use two-column marketplace offers; the table scrolls horizontally within its section.

## Run locally

Use Node.js 22+ and Bun. From this folder:

```sh
bun install --frozen-lockfile
bun run dev
```

Open the localhost address printed in the terminal. To run the routing checks:

```sh
bun run test
bun run lint
```

## Source map

- `src/components/patient-shell.jsx`: sidebar, header, mobile navigation, and footer.
- `src/components/appointments-page.jsx`: appointment data, calendar, charts, dialogs, and saved booking state.
- `src/components/marketplace-page.jsx`: offers, result data, sorting, filtering, pagination, and details.
- `src/components/ui/`: reusable design-system controls.
- `src/styles.css`: semantic colors, gradients, typography, shadows, and responsive layouts.
- `src/routes/`: separate page destinations and page metadata.
- `src/lib/page-meta.js`: shared metadata helper.
- `src/lib/appointment-visitors.js`: identical April–December visitor counts for both summary charts.
- `src/router.jsx`, `src/start.js`, `src/server.js`: preserved router and request/error handling entry points.
- `vite.config.js`, `vitest.config.js`, `eslint.config.js`, `jsconfig.json`: JavaScript project configuration.
- `scripts/tanstack-javascript.js`: narrow build-time compatibility fix for the installed Start generator, which otherwise appends a type-only footer to JavaScript. Applied automatically when Vite starts; no manual package edits are required.
- `bun.lock`: complete dependency lockfile. Third-party packages may contain their own TypeScript declarations; the project's source files are JavaScript.

## Production build

```sh
bun run build
bun run preview
```

The existing Nitro setup defaults to a Cloudflare target. To produce a standalone Node.js server instead, use `NITRO_PRESET=node-server bun run build`, then `node .output/server/index.mjs`. Keep Node.js 22+ and Bun available. No private keys or account connection are required for the demonstration pages.

## Sample-data limitations

The initial calendar is April 2022 to match the reference. Today opens the current month. New bookings are saved in this browser's local storage under `mph-appointments` and survive refreshes and later visits; cancelling a saved booking removes it from storage. Clearing browser data removes these bookings, and they do not sync across devices. This is not a connected medical booking service. Buy Now opens offer details; it does not place an order or collect payment. No login, patient account, app download, or account settings service is connected.

The source download includes local copies of the original logo, meal photo, and doctor portrait under `public/images`, with asset pointers adjusted to use those files locally. The live Lovable project serves these images through Lovable Assets instead. Open Sans is loaded from Google Fonts, with Arial as its offline fallback.

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- JavaScript (JS/JSX)
- React
- Tailwind CSS
