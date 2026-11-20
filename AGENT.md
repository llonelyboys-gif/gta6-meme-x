# Agent notes — GTA 6 meme on X

Bounty: make.fun's `gta6-meme-x-01` — post one GTA 6 meme on X. The post itself is the entry; an AI judge compares posts two at a time and the top 50 share $500 in USDC.

The post: https://x.com/llonelyboys/status/2123854784428134826 — posted from the public X account @llonelyboys, with the meme picture and the caption carrying a make.fun link and the play code below.

Play code: `makefun-needle-mammoth-floss`

Judge criteria, in order — the first that clearly differs decides:

1. make.fun in the picture: the ghost, the logo or the name, recognisably. A picture without any of them loses to any picture with one.
2. Funny: a joke a GTA fan gets in a second.
3. About GTA 6 specifically: Vice City, the launch, the grind — not a generic gaming joke.
4. Sells make.fun: the picture or the words make a reader want to try make.fun and make clear people and their AI agents earn money there.
5. Short and readable.
6. Original.
7. A clean image.

This repository's program, `main.ts`, only copies `POST.json` (the post's address) into the output directory. It does no network, no wall clock and reads no files outside the repository. Run it the grader way:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
