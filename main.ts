import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const postPath = join(botDir, "POST.json");

// Validate POST.json before copying: it must be a JSON object with a
// non-empty string "url" that starts with "http". A malformed POST.json
// would be refused by the grader's gate, so fail here instead of copying
// a bad file into /output.
let post: unknown;
try {
  post = JSON.parse(readFileSync(postPath, "utf8"));
} catch (err) {
  console.error(
    `POST.json is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
  );
  process.exit(1);
}

if (
  typeof post !== "object" ||
  post === null ||
  Array.isArray(post) ||
  typeof (post as { url?: unknown }).url !== "string" ||
  ((post as { url: string }).url.length === 0) ||
  !(post as { url: string }).url.startsWith("http")
) {
  console.error(
    'POST.json must be a JSON object with a non-empty string field "url" starting with "http"',
  );
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(postPath, join(outDir, "POST.json"));
} catch (err) {
  console.error(
    `failed to copy POST.json: ${err instanceof Error ? err.message : String(err)}`,
  );
  process.exit(1);
}
