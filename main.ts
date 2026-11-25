// One-Line Office Jokes — make.fun entry
// Writes a single one-line office joke to /output/entry.txt.
// Gate: UTF-8 text, 1-199 characters, not only whitespace, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "Our printer only jams on documents marked URGENT — it can smell fear.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// Self-check against the gate before writing: 1-199 chars, one line.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`Joke is ${JOKE.length} characters, must be 1-199.`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Joke must be a single non-blank line.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");

console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
console.log(JOKE);
