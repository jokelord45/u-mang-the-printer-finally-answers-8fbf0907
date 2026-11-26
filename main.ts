// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
// The program writes the single line the office printer finally says back
// after years of paper jams, cryptic error codes, and being thumped.
// The line: eleven years of PC LOAD LETTER, and the printer still doesn't
// know what it means — but sure, thump it again, that always fixes it.
// Weary, literal, passive-aggressive: the machine confesses it never
// understood its own error code, then turns the thump back on the human.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Eleven years I've said PC LOAD LETTER and I still don't know what it means — but sure, thump me again, that always fixes it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
