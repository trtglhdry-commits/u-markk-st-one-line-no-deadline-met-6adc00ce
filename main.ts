// One Line, No Deadline Met — make.fun bounty entry.
// Writes a single original one-line joke excusing a missed deadline
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: no randomness, no network, no clock, no environment
// dependence beyond the output directory. Node 22, stdlib only.
// The output is one line plus a trailing newline: 77 chars, 78 bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: 77 characters, one line, one sentence, punch at the end.
const LINE =
  "I snoozed the deadline so many times it filed a restraining order against me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
