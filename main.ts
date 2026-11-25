// One-star review of Monday, as if Monday were a restaurant.
// Written for the tired office worker judging it: three grievances a
// group chat recognises instantly (no table, cold coffee, a screaming
// alarm for a waiter) and one punchline that lands the joke — charged
// a full week's price for a single day. Max 25 words.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE = "One star. Arrived Monday, no table ready, coffee cold, the waiter — my alarm — screamed at me, and they charged me a week for one day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(LINE);
