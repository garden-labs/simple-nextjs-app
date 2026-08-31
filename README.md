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

## Ideas for agent experiments

- Add dark mode
- Turn the tabs into separate routes
- Add a dog-photo gallery
- Create a guestbook backed by a database
- Add tests and a CI workflow
