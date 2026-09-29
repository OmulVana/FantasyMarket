# Fantasy Market – End-to-End Tests

Automated browser tests for the main user flows, written in JavaScript with [Playwright](https://playwright.dev).
This folder is fully separate from the React app: it has its own `package.json` and dependencies, and it never imports app code.

## Setup (once)

```bash
cd e2e
npm install
npm run install:browsers
```

The app itself also needs its dependencies (`npm install` in the project root).

## Running

```bash
cd e2e
npm test              # run everything headless (starts the Vite dev server automatically)
npm run test:headed   # watch the browser while tests run
npm run test:ui       # Playwright's interactive UI mode
npm run report        # open the HTML report from the last run
```

Run a single file or test: `npx playwright test specs/cart.spec.js` or `npx playwright test -g "checkout"`.

The dev server is started on port **5174**, so it doesn't clash with your normal `npm run dev` on 5173.
To test an app that's already running or deployed somewhere else, set `E2E_BASE_URL`:

```bash
E2E_BASE_URL=http://localhost:5173 npm test
```

## What is covered

| Spec | Flows |
| --- | --- |
| `specs/auth.spec.js` | Redirect to login, customer and vendor login, invalid credentials, form validation |
| `specs/navigation.spec.js` | Header links, logo, "Shop Now", 404 page |
| `specs/products.spec.js` | Featured promo items, product list, product details page, unknown product |
| `specs/cart.spec.js` | Empty cart, adding from every page, header badge, cart persistence, checkout |

Every test runs twice: once on desktop Chrome and once on a mobile Chrome profile (Pixel 7).

## Structure

```
e2e/
├── playwright.config.js   # browsers, base URL, dev-server startup
├── fixtures.js            # custom `test` with page objects + `loginAs(role)`
├── data/                  # test users and expected product data
├── pages/                 # page objects (selectors live here, not in specs)
└── specs/                 # the tests
```

## Notes for writing tests

- Login and cart state live only in React memory, so `page.goto()` logs the user out and empties the cart.
  After `loginAs(...)`, move around by clicking links instead of calling `page.goto()`.
- The app uses CSS Modules (hashed class names), so page objects match on the readable part, e.g. `[class*="productCard"]`.
  Prefer role/text locators (`getByRole`, `getByText`) where possible.
- YouTube requests from the home-page video are blocked in `fixtures.js` to keep runs fast and work offline.
- If product data in `src/magicItems.js` changes, update `data/products.js` to match.
