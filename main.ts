// One-star review of Monday, as if Monday were a restaurant.
// A tired office worker's verdict: cold coffee, a screaming alarm for a
// waiter, and a full week's price for a single day. Max 25 words.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE = "One star. Arrived Monday, no table ready, coffee cold, the waiter — my alarm — screamed at me, and they charged me a week for one day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(LINE);
