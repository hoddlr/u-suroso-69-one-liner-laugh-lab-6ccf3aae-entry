import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My bank account and my phone battery have the same hobby: dying at 1%.";

const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, entry, "utf8");
