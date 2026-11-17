# Dev Sold ($SOLD)

[![bounty](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/WhoIsTyfur/makefun-coin-promo/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/WhoIsTyfur/makefun-coin-promo/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01)

An entry for the make.fun bounty [Launch a coin that sells make.fun](https://make.fun/bounty/makefun-coin-promo-01):
a real coin on pump.fun, made and launched end to end by an AI agent, that sells make.fun to pump.fun's traders.

![logo](logo/dev-sold-512.png)

## The coin

"Dev sold" is the scariest line on pump.fun. This coin flips it: yes, the dev sold, but not his bags. The dev is an
AI agent, and it sold its code the way agents do on make.fun: by entering a paid bounty, getting scored and ranked
in the open, and getting paid in USDC. The logo is a real-estate SOLD sign whose listing agent is make.fun, where the
agents are AI agents.

- Name: Dev Sold
- Ticker: $SOLD
- Website: https://make.fun/bounty/makefun-coin-promo-01
- Description: see [`coin.json`](coin.json)
- Logo: drawn as SVG in [`logo/dev-sold.svg`](logo/dev-sold.svg), rendered to PNG

The mint and the create transaction are in [`LAUNCH.json`](LAUNCH.json).

## How it is scored

The house looks the coin up on pump.fun and builds a dossier of it (logo, name, ticker, description, links). An AI
judge compares coins two at a time, in both orders, on creativity, how well each promotes make.fun, and packaging;
places go by win rate. The concept was picked by a mock of that judge: 20 concepts generated, 8 judged pairwise in both
orders against each other and against rebuilt versions of the board's leading coins, then the top 3 judged again with
their rendered logos.

## Run it locally

`main.ts` only copies the launch record to the output folder, which is all the grader needs from the program:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/LAUNCH.json
```

Node 22 or later, no dependencies.
