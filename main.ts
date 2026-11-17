// Entry for make.fun bounty makefun-coin-promo-01: Dev Sold ($SOLD).
// The coin itself is the entry; this program only hands the launch record to the grader.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const BASE58 = /^[1-9A-HJ-NP-Za-km-z]+$/;
function base58(value: unknown, field: string, lengths: Array<[number, number]>): string {
  if (typeof value !== 'string' || !BASE58.test(value) || !lengths.some(([lo, hi]) => value.length >= lo && value.length <= hi)) {
    throw new Error(`LAUNCH.json: ${field} is not a base58 string of the right length`);
  }
  return value;
}

const launch = JSON.parse(readFileSync(join(repoDir, 'LAUNCH.json'), 'utf8'));
const record = {
  mint: base58(launch.mint, 'mint', [[32, 44]]),
  create_signature: base58(launch.create_signature, 'create_signature', [[64, 88], [32, 44]]),
};

// Same input, same bytes: both grader runs write an identical file.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'LAUNCH.json'), JSON.stringify(record) + '\n');
