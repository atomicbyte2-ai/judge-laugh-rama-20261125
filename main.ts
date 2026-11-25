import * as fs from "node:fs";
import * as path from "node:path";

// One original joke about office life: the plant outlasts everyone,
// so the punchline promotes it. Single line, under 200 characters.
const LINE = [
  "The office plant has survived three layoffs,",
  "two managers, and one rebrand, so HR now lists",
  "it as our most senior employee.",
].join(" ");

// Guard the gate: 1-200 chars, single line, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE.trim().length === 0
) {
  throw new Error(`entry line fails the gate (${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, LINE, "utf8");
