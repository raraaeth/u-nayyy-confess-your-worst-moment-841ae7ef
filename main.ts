// Confess Your Worst Moment entry.
// Deterministic program: writes one fixed confession line to entry.txt.
// No network access, no randomness, no external input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
const entryPath = join(dir, "entry.txt");
writeFileSync(entryPath, CONFESSION, "utf8");

// Verify after write: read the file back and assert it matches exactly.
const written = readFileSync(entryPath, "utf8");
if (written !== CONFESSION) {
  console.error(
    `Verification failed: entry.txt content does not match the expected line.`,
  );
  process.exit(1);
}
