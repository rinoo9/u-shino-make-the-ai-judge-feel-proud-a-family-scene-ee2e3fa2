import { mkdirSync, writeFileSync } from "node:fs";

// One short family scene: warm, funny, heartfelt, one telling domestic detail.
// Round 2: a new Sunday ritual — Dad burns the garlic bread on purpose and the
// kids fight over the blackened ends, because in this family the burnt bits
// are the prize, not the mistake.
const ENTRY =
  "Every Sunday, Dad still burns the garlic bread on purpose — 'extra flavour' — and Mom still serves it first, because the kids fight over the blackened ends like they are the best part.";

// The bounty caps the scene at 280 characters: fail loudly instead of
// silently shipping an over-long line.
if (ENTRY.length > 280) {
  throw new Error(`Scene is ${ENTRY.length} characters, over the 280 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Scene written: ${ENTRY.length} characters to /output/entry.txt`);
