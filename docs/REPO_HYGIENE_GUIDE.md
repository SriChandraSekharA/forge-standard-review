# Repo Hygiene — Step 2 How-To

> For `SriChandraSekharA/forge-standard-review` @ `9f0507a` (Pages `minima` + `FUNDING.yml` done). All files below are **non-workflow** so `git push` succeeds without `workflow` scope (unlike `.github/workflows/ci.yml`).

## Files to add (7)

### 1. `.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule: {interval: weekly}
  - package-ecosystem: npm
    directory: /mcp
    schedule: {interval: weekly}
  - package-ecosystem: github-actions
    directory: /
    schedule: {interval: weekly}
```
`Verify: ls .github/dependabot.yml && cat` — Dependabot PRs appear under `Insights → Dependency graph → Dependabot`.

### 2. `SUPPORT.md` (root)
```md
# Support
- Bugs/features: use issue templates
- Questions: Discussions
- Security: email SECURITY.md contact (chandrashekar.adepalli@kfintech.com)
```

### 3. `CITATION.cff` (root)
```yaml
cff-version: 1.2.0
title: Forge Standard Review
message: If you use this skill, please cite
type: software
authors: [{given-names: Chandra Sekhar, family-names: A}]
repository-code: https://github.com/SriChandraSekharA/forge-standard-review
license: MIT
```
Shows “Cite this repository” button.

### 4. `.github/CODEOWNERS`
```
* @SriChandraSekharA
/mcp/ @SriChandraSekharA
```

### 5. `.github/ISSUE_TEMPLATE/config.yml`
```yaml
blank_issues_enabled: false
contact_links:
  - name: Discussions
    url: https://github.com/SriChandraSekharA/forge-standard-review/discussions
    about: Ask questions
```

### 6. `.editorconfig` (root)
```
root = true
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
[*.sh]
indent_size = 2
```

### 7. `.gitattributes` (root)
```
mcp/dist/ linguist-vendored
*.sh linguist-language=Shell
```

## How to apply
```bash
cd "/Users/webileapps/Chandu/github/forge-standard-review"
# create each file as above
git add .github/dependabot.yml SUPPORT.md CITATION.cff .github/CODEOWNERS .github/ISSUE_TEMPLATE/config.yml .editorconfig .gitattributes docs/REPO_HYGIENE_GUIDE.md
git commit -m "chore: add repo hygiene dependabot+SUPPORT+CITATION+CODEOWNERS"
git push origin main
```
No workflow scope needed — unlike `ci.yml` line 41 (`npx --yes typescript tsc --noEmit -p mcp/tsconfig.json` which must be edited via GitHub UI `Add file`).

## Current state
- `FUNDING.yml` done (`github:` etc, Sponsor button when filled)
- `LICENSE MIT`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` done
- `BRANCH_PROTECTION.md` docs branch protection (API 403 until admin PAT)
- Remaining 7 files are optional but recommended for OSS hygiene / skills.sh discoverability.

## Verify
```bash
ls -lh .github/dependabot.yml SUPPORT.md CITATION.cff .github/CODEOWNERS .github/ISSUE_TEMPLATE/config.yml .editorconfig .gitattributes
grep -r qodo --include="*.md" --exclude-dir=.git | head
```
