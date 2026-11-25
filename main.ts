import { mkdirSync, writeFileSync } from "node:fs";

// One short family scene: warm, funny, heartfelt, one telling domestic detail.
const ENTRY =
  "Dad still takes the burnt corner of the lasagna — 'the chef's tax' — and Mom still sighs, then swaps it for the good piece when she thinks no one's looking. Thirty years, and he's never once caught her.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
