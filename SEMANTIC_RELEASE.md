# Semantic Release Guide

## What is Semantic Release?

Semantic Release automates the entire package versioning process, including:
- Determining the next version number
- Generating release notes
- Publishing the package (in this case, only updating versions)
- Creating Git tags
- Updating CHANGELOG.md

## Configuration

The configuration is located in `.releaserc.json` and includes:

### Configured Plugins

1. **@semantic-release/commit-analyzer**: Analyzes commits to determine the release type
2. **@semantic-release/release-notes-generator**: Generates release notes
3. **@semantic-release/changelog**: Generates and updates CHANGELOG.md
4. **@semantic-release/npm**: Updates version in package.json (without publishing to npm)
5. **@semantic-release/git**: Commits changes (CHANGELOG.md, package.json)
6. **@semantic-release/github**: Creates a release on GitHub

### Files that are automatically updated

- `CHANGELOG.md` - Change history
- `package.json` - Main monorepo version
- `client/package.json` - Client version
- `server/package.json` - Server version

## GitHub Actions Workflow

The `.github/workflows/release.yml` file runs semantic-release automatically when:
- Pushing to the `main` branch
- Commits follow the Conventional Commits convention

### Required Environment Variables

The workflow uses `GITHUB_TOKEN` which GitHub Actions provides automatically with configured permissions:
- `contents: write` - To create tags and commits
- `issues: write` - To comment on issues
- `pull-requests: write` - To comment on PRs

## Commit Convention

### Basic format
```
<type>(<scope>): <description>
```

### Types and their versioning impact

| Type | Description | Version Bump |
|------|-------------|--------------|
| `fix` | Bug fix | PATCH (0.0.X) |
| `feat` | New feature | MINOR (0.X.0) |
| `feat!` or `BREAKING CHANGE` | Breaking compatibility change | MAJOR (X.0.0) |
| `docs`, `style`, `refactor`, `perf`, `test`, `chore` | Other changes | Doesn't affect version |

### Practical Examples

#### Patch Release (0.0.1 → 0.0.2)
```bash
git commit -m "fix(client): correct form validation error"
git commit -m "fix(server): resolve health check endpoint timeout"
```

#### Minor Release (0.0.1 → 0.1.0)
```bash
git commit -m "feat(client): add user profile page"
git commit -m "feat(server): implement JWT authentication"
```

#### Major Release (0.0.1 → 1.0.0)
```bash
# Option 1: Use !
git commit -m "feat(server)!: change API response structure"

# Option 2: Use BREAKING CHANGE in body
git commit -m "feat(server): change API response structure

BREAKING CHANGE: Endpoints now return { data, meta } instead of just data"
```

#### Multiple changes in one commit
```bash
git commit -m "feat(client): add theme selector

- Implement light/dark theme selector
- Save preference to localStorage
- Add transition animation"
```

## Recommended Workflow

### 1. Local Development
```bash
# Create a feature branch
git checkout -b feat/new-feature

# Make changes
# ...

# Commit following convention
git commit -m "feat: feature description"

# Push and create PR
git push origin feat/new-feature
```

### 2. Pull Request
- Create PR to `main`
- Ensure PR title follows convention if doing squash merge
- Review changes
- Merge to `main`

### 3. Automatic Release
- When merging to `main`, GitHub Actions runs semantic-release
- Commit history is analyzed
- New version is determined
- CHANGELOG.md is updated
- Commits and tags are created
- Release is published on GitHub

## Verify Local Configuration

Although semantic-release is designed for CI/CD, you can verify the configuration locally:

```bash
# Dry-run mode (doesn't make real changes)
pnpm semantic-release --dry-run

# See what version would be generated
pnpm semantic-release --dry-run --no-ci
```

**Note**: Dry-run mode may fail locally with authentication errors, this is normal and expected.

## Troubleshooting

### Release is not generated
1. Verify there are new commits since the last tag
2. Verify commits follow the convention (feat, fix, etc.)
3. Review GitHub Actions logs

### Version is not as expected
- Review the commit type used
- `fix` → patch
- `feat` → minor
- `feat!` or `BREAKING CHANGE` → major

### CHANGELOG.md is not updated
- Verify that `@semantic-release/changelog` plugin is in `.releaserc.json`
- Verify that CHANGELOG.md is in the assets list of `@semantic-release/git`

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [COMMITS.md](./COMMITS.md) - Project commit guide
