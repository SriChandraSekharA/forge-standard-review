# Changelog

All notable changes to this project will be documented in this file.

## [v1.1.3] - 2026-09-07 IST

**Release:** `v1.1.3: site SEO + sponsors + CI fixes + smoke workdir`

- **HEAD:** `38ee9be` (origin/main) — 8 commits since `v1.1.2 9fd650d` (`28408a0 Add CI workflow` → `38ee9be fix stdio smoke workdir`)
- **Diff v1.1.2..v1.1.3:** 22 files, 860 insertions, 13 deletions — `mcp/dist/server.js +168`, `mcp/src/server.ts +201` (prompts/resources), `_config.yml +24`, `assets/css/style.scss +64`, `theme.js +54`, `custom-head.html +36`, `REPO_HYGIENE_GUIDE.md +97`, `Dockerfile +21`
- **CI fixes:** `5ededa3` `npx --yes typescript tsc` → `38ee9be` `./mcp/node_modules/.bin/tsc --noEmit -p mcp/tsconfig.json` (avoid `tsc@2.0.4` deprecated, use local `typescript@5.x` after `npm ci --prefix mcp`); `examples/stdio-smoke.sh` `mkdir -p "$WORKDIR"` before `existsSync` so `bash examples/stdio-smoke.sh --workdir "/tmp/with spaces/ci smoke"` no longer `workdir does not exist` → now `exitCode:0 workdir: /tmp/with spaces/ci smoke` PASS for both matrix 20/22
- **Site (Pages/Jekyll):** `5b0b101` `remote_theme: minima` + `jekyll-seo-tag`/`jekyll-feed`; `f7aa469` `FUNDING.yml` (12 keys, max 4 `github`/`custom`, `https` only per https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository) + dark `skin: auto` + `assets/css/style.scss` `@media (prefers-color-scheme: dark)` #0d1117 overrides; `9f0507a` `url: https://srichandrasekhara.github.io` `baseurl: /forge-standard-review` + `jekyll-sitemap` + `robots.txt` sitemap, `assets/js/theme.js` toggle `localStorage["theme"]` + `data-theme` CSS, `_includes/custom-head.html` button, `index.md` `image: badge.svg` og:image, `docs/REPO_HYGIENE_GUIDE.md` step2 how-to (7 files: `.github/dependabot.yml`, `SUPPORT.md`, `CITATION.cff`, `CODEOWNERS`, `.github/ISSUE_TEMPLATE/config.yml`, `.editorconfig`, `.gitattributes`)
- **MCP engineering:** `9f0507a` prompts `review` (`mode/file/range/focus` → ranked `critical->nitpick`) + resources `forge://.forge-standard-review/report.md`/`review.json` + `Dockerfile` `node:20-alpine` stdio `ENTRYPOINT ["node","dist/server.js"]`, `mcp/package.json` `bin/files/publishConfig`, `tsc --noEmit` clean, `npm --prefix mcp test` 28 passed, `npm pack` 7 files
- **Verify:** `bash -n scripts/*.sh` 8 clean, `npx skills add -l` `Found 1 skill forge-standard-review`, `gh api archived:true` for legacies, `skills.sh` 404 pending <24h (poll via `bash scripts/poll-skills.sh`)

## [v1.1.2] - 2026-09-07

- Rename `forge-standard` → `forge-standard-review` per review name requirement: `mv` dir, `SKILL.md` `name: forge-standard-review`, `.forge-standard-review/` isolation (68 refs), `package.json`/`mcp` keywords 19, `npx -l` `Found 1 skill`, new public repo `SriChandraSekharA/forge-standard-review` UI-created, pushed `9fd650d`, tagged `v1.1.2 677627c`, `ci.yml` 71 lines, topics 8, `https://srichandrasekhara.github.io/forge-standard-review/`
- Jekyll Pages already live `200` but dark toggle pending (fixed in v1.1.3)

## [v1.1.1] - 2026-09-05

- Title sync `SKILL.md:6 # Anvil Review Loop → # Forge Standard` + `CHANGELOG v1.1.0` closure `gh release v1.1.0 200`, `ci.yml` 2090B pending workflow scope, `docs/ARCHIVE_RUNBOOK/BRANCH_PROTECTION/SEO_CHECKLIST/audit-v1.1.1 406L`, `poll-skills.sh 9531B 308->404`

## [v1.1.0] - 2026-09-05 IST

**Release closure:** `v1.1.0: OSS baseline + MCP stdio server`

- **Date (IST):** 2026-09-05T06:09:57+05:30 (commit `c9724d5`) — tag `v1.1.0` `cb1fa7068c99a24175ef3caaaa0f3f28b1028165` pushed `2026-09-05T00:40:32Z` (gh `created_at: 2026-09-05T00:40:25Z`, `published_at: 2026-09-05T03:06:48Z` per `gh api repos/SriChandraSekharA/forge-standard-review/releases/tags/v1.1.0`)
- **HEAD:** `c9724d576d57a70154be9b3c184918675f9ff605` (origin/main, HEAD -> main) — `git log --oneline -5` confirms `c9724d5 feat: add OSS baseline, MCP stdio server, tests and examples with verify.log` on top of `09312ed (v1.0.0)`
- **Tag:** `cb1fa7068c99a24175ef3caaaa0f3f28b1028165` `refs/tags/v1.1.0` -> `c9724d5` `refs/tags/v1.1.0^{}` via `git ls-remote --tags origin` — no move of `cb1fa70`, no force
- **Diff:** 43 files changed, 6482 insertions(+), 3 deletions(-) — per `git show c9724d5 --stat` (see `.omo/audit-v1.1.1.md` raw capture)

### OSS baseline (LICENSE MIT, CONTRIBUTING, CoC, SECURITY, .github templates)

- `LICENSE` — MIT Copyright (c) 2026 Chandra Sekhar (1071 bytes, 21 lines) — `gh api .../license` now 200 MIT (was 404 at 09312ed)
- `CONTRIBUTING.md` — 78 lines
- `CODE_OF_CONDUCT.md` — Contributor Covenant 2.1, 132 lines
- `SECURITY.md` — 33 lines, Supported Versions + Reporting `chandrashekar.adepalli@kfintech.com`
- `.github/ISSUE_TEMPLATE/bug_report.md` + `feature_request.md` + `PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/ci.yml` — 2090 bytes, matrix node 20,22, `bash -n`, `tsc --noEmit`, 28 tests, stdio smoke with quoted workdir + spaces path, `mcp-client.js` checks — was absent at 09312ed, now present
- `.github/BRANCH_PROTECTION.md` (Task 8.5) + `docs/SEO_CHECKLIST.md` (Task 8.6) — hardening/promo
- `gh api repos/SriChandraSekharA/forge-standard-review` — topics 8 `["code-quality","code-review","owasp","pr-review","pull-request-review","review-loop","security-review","vulnerability-review"]`, `archived:false`, `visibility:public`, `license:mit` — topics 8 documented
- `workdir quoted:` `"/Users/webileapps/Chandu/github/forge-standard-review"` — all commands `git -C "...` + quoted paths

### MCP SDK 1.30.0 stdio forge_review

- `mcp/mcp.json` — `transport: stdio`, `command: node`, `args: ["mcp/dist/server.js"]`, `entry: mcp/src/server.ts`, `sdk: @modelcontextprotocol/sdk`, tools `[{"name":"forge_review"}]` — synced across `mcp/src/server.ts` `FORGE_REVIEW_TOOL`, `docs/MCP.md`, `README.md`, `SKILL.md`
- `mcp/package.json` — `forge-standard-review-mcp` `^1.30.0` (`@modelcontextprotocol/sdk`), `type: module`, `bin: forge-standard-review-mcp`, `engines: node>=20`, `license: MIT`, scripts `build/start/test`
- `mcp/src/server.ts` — 270 lines, `path.resolve(workdir)` + `existsSync(workdir)` + `spawn("bash", [...], {cwd: workdir})` quoted, no shell interpolation
- `mcp/dist/server.js` — 7722 bytes built artifact (do not edit `mcp/dist` directly; build via `npm run build --prefix mcp`)
- `docs/MCP.md` — 147 lines, `mcp/README.md` — 115 lines, `docs/ADR-001-mcp-repo-strategy.md` — 106 lines, `examples/mcp-client.js` + `stdio-smoke.sh` + `claude-config.json`

### 28 vitest, examples + docs/MCP, verify.log

- `28 vitest` — `mcp/tests/server.test.ts` + `stdio.test.ts` → 2 files, 28 passed (8.4s+) via `npm --prefix mcp test` / `npm test` root delegates — includes initialize→tools/list→tools/call + workdir spaces handling
- `examples + docs/MCP` — `examples/mcp-client.js` 142 lines, `examples/stdio-smoke.sh` 130 lines, `docs/MCP.md` 147 lines — synced tool table `mode enum auto|staged|range|file`, `preview boolean`, `workdir string`, `required: []`
- `verify.log` — `.omo/verify.log` `2026-09-05T00:39:38Z`, 29 lines smoke: `initialize id1 capabilities.tools` + `serverInfo forge-standard-review 1.0.0` + `tools/list count=1 names=['forge_review']` + `tools/call isError=False` `exitCode:0` workdir `"/Users/webileapps/Chandu/github/forge-standard-review"` + parsed checks `capabilities.tools present True` `tools/call success`
- `bash -n scripts/*.sh` — 8 scripts clean (`critic.sh`, `history.sh`, `init.sh`, `knowledge.sh`, `merge.sh`, `poll-skills.sh`, `report.sh`, `review.sh` — all `set -euo pipefail`)
- `npx tsc --noEmit -p mcp/tsconfig.json` — clean (also `npm --prefix mcp run build`)
- `npx --yes skills add "/Users/webileapps/Chandu/github/forge-standard-review" -l` — `Found 1 skill` `forge-standard-review` — proof `assets/npx-proof.txt`

### Topics 8

- `code-quality`, `code-review`, `owasp`, `pr-review`, `pull-request-review`, `review-loop`, `security-review`, `vulnerability-review` — verified `gh api repos/SriChandraSekharA/forge-standard-review --jq .topics`

### Manual release (gh + UI fallback)

Released via:

```bash
gh release create v1.1.0 --repo SriChandraSekharA/forge-standard-review --title "v1.1.0: OSS baseline + MCP stdio server" --target c9724d5 --notes "**Full Changelog**: https://github.com/SriChandraSekharA/forge-standard-review/compare/v1.0.0...v1.1.0"
# or annotated tag already pushed:
git tag -a v1.1.0 -m "v1.1.0: OSS baseline + MCP stdio server with verified live smoke" c9724d5
git push origin v1.1.0 --follow-tags  # --follow-tags, no --force, no move of cb1fa70
gh api repos/SriChandraSekharA/forge-standard-review/releases/tags/v1.1.0 --jq '.tag_name, .target_commitish, .published_at'
# => v1.1.0, main, 2026-09-05T03:06:48Z (200) — if 404, manual pending -> UI fallback
```

**UI fallback:** `https://github.com/SriChandraSekharA/forge-standard-review/releases` → `Draft a new release` → `Choose a tag: v1.1.0` → `Target: c9724d576d57a70154be9b3c184918675f9ff605` (commit `c9724d5`) → `Release title: v1.1.0: OSS baseline + MCP stdio server` → `Publish release` — verify `git ls-remote --tags origin` shows `cb1fa70 refs/tags/v1.1.0` and `c9724d5 refs/tags/v1.1.0^{}`

**Guardrails:** no `gh repo archive` retry in this closure (legacies `anvil-review-loop` + `qodo-standard-review` remain `archived:false` pending manual after skills.sh live), no move of `cb1fa70`, no edit of `mcp/dist` directly, use quoted `workdir` param and `git -C "/Users/webileapps/Chandu/github/forge-standard-review"`

### Drift note (SKILL.md:6)

- `SKILL.md:6` residual `# Anvil Review Loop` vs `name: forge-standard-review` — see v1.1.1 below if approved sync `Anvil->Forge Standard` (frontmatter intact, `grep -n anvil` verify).

## [v1.0.0] - 2026-09-05

- Initial release `09312ed` `edef5bc` — TDD scenarios A-D RED->GREEN, ranked report `critical->nitpick`, merge-preservation, worker->critic loop gate 8 max4.
