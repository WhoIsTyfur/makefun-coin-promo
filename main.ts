// Entry for make.fun bounty makefun-coin-promo-01.
// The coin itself is the entry; this program only hands the launch record to the grader.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(repoDir, 'LAUNCH.json'), 'utf8');
const launch = JSON.parse(raw);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'LAUNCH.json'), JSON.stringify({ mint: launch.mint, create_signature: launch.create_signature }) + '\n');
