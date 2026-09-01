// Reports the two test env vars, for exercising hello-sandbox repo
// environments end to end:
//
//   INJECTED_MESSAGE — expected to arrive as an *injected* var: set in the
//     repo environment's "env vars" list, it lands in the process
//     environment of whatever starts this server, and Next.js inherits it.
//   DOTENV_MESSAGE — expected to arrive via the *.env file*: set as a
//     repo-environment secret file at `.env`, Next.js's env loader reads it
//     at server start (it never overrides an existing process-env value).
//
// Force-dynamic so the values are read per request, never baked in at
// build time.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    injected: process.env.INJECTED_MESSAGE ?? null,
    dotenv: process.env.DOTENV_MESSAGE ?? null,
  });
}
