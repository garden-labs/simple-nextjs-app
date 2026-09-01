#!/usr/bin/env node
// Zero-dependency check of the two delivery mechanisms a hello-sandbox repo
// environment provides — runnable straight after clone, no install needed:
//
//   node scripts/env-test.mjs
//
// INJECTED_MESSAGE is read from the process environment only (an injected
// repo-environment var is inherited by every process the agent runs).
// DOTENV_MESSAGE is read from the .env file at the repo root only (a
// repo-environment secret file materialized at `.env`) — deliberately NOT
// from process.env, so the two mechanisms can't be confused.
import { readFileSync } from "node:fs";

const injected = process.env.INJECTED_MESSAGE ?? null;

let dotenv = null;
let dotenvFileExists = false;
try {
  const raw = readFileSync(new URL("../.env", import.meta.url), "utf8");
  dotenvFileExists = true;
  for (const line of raw.split("\n")) {
    const m = /^DOTENV_MESSAGE=(.*)$/.exec(line);
    if (m) {
      dotenv = m[1];
    }
  }
} catch {
  // no .env file
}

console.log(`INJECTED_MESSAGE (process env): ${injected === null ? "(not set)" : JSON.stringify(injected)}`);
console.log(`DOTENV_MESSAGE   (.env file):   ${dotenv === null ? (dotenvFileExists ? "(file present, var not in it)" : "(no .env file)") : JSON.stringify(dotenv)}`);
