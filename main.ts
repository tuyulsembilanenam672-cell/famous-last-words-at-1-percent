import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Battery at 1%. My final words: I could have lasted all day, but someone kept refreshing the feed at 3 a.m.";
const MAX_CODE_POINTS = 199;

const points = [...LINE];
if (points.length < 1 || points.length > MAX_CODE_POINTS) {
  throw new Error(`line must be 1-${MAX_CODE_POINTS} code points, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${points.length} code point(s) to /output/entry.txt`);
