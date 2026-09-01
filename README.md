# simple-nextjs-app

A deliberately small Next.js app for testing cloud-agent workflows. It has a centered dog photo, three interactive tabs, responsive styling, and no backend or external services.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
pnpm typecheck
pnpm build
pnpm start
```

The main page lives in `app/page.tsx`, its styles are in `app/globals.css`, and the dog image is in `public/dog.png`.

## Testing repo environments (hello-sandbox)

The app surfaces two env vars, one per delivery mechanism:

- `INJECTED_MESSAGE` — set it as an **env var** in the repo environment; it
  is injected into the process environment of everything the agent runs.
- `DOTENV_MESSAGE` — put `DOTENV_MESSAGE=...` in a **secret file** at `.env`;
  Next.js loads it from the file at server start. (`.env` is gitignored.)

Three ways to observe them:

```bash
node scripts/env-test.mjs   # no install needed; reads process env + .env directly
```

```bash
pnpm install && pnpm dev    # then: curl -s localhost:3000/api/env-test
```

Or open the app in a browser and click the **Env** tab.

## Ideas for agent experiments

- Add dark mode
- Turn the tabs into separate routes
- Add a dog-photo gallery
- Create a guestbook backed by a database
- Add tests and a CI workflow
