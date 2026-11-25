// Confess Your Worst Moment entry.
// Deterministic program: writes one fixed confession line to entry.txt.
// No network access, no randomness, no external input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I waved back at someone who was not waving at me, then committed to the bit and waved at everyone in the cafe.";

function resolveOutputDir(): string {
  const override = process.env.OUTPUT_DIR;
  if (override !== undefined && override.length > 0) {
    return override;
  }
  return "/output";
}

const dir = resolveOutputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), CONFESSION, "utf8");
