import { mkdirSync, writeFileSync } from "node:fs";

// One short family scene: warm, funny, heartfelt, one telling domestic detail.
const ENTRY =
  "Dad still saves the burnt corner of the lasagna for himself, calls it 'the chef's tax,' and Mom still pretends not to notice — then slips him the good piece when she thinks no one is looking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
