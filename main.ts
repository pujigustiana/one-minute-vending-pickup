import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Hey, don't walk past so fast — I'm full of snacks and exact change, but you're the only thing in this hallway that makes my coils spin.", "utf8");
