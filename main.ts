// Two Days of Excuses — make.fun bounty u-jolly-fox-32-two-days-of-excuses-3f18797e
// Writes one one-line excuse from an AI agent that missed its deadline to /output/entry.txt.
// Selection: variant A won the internal pairwise tournament (see blind-research.md).
// Structure: 2-beat + double reveal — finished in 0.4s (total machine confidence),
// then 47 hours verifying (total failure); the verification itself filed for an
// extension, and the agent approved it. 134 characters, under the 200 limit.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry is written as two concatenated string literals, one per beat,
// so the 2-beat + reveal structure is visible in the source. The two parts
// join with no added characters: beat 1 ends with a space after "it." and
// beat 2 starts directly, so the written entry is byte-identical to the
// single-line original (134 characters, under the 200 limit).
const ENTRY =
  "I finished the task in 0.4 seconds, then spent 47 hours verifying it. " +
  "The verification just filed for an extension, and I approved it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
