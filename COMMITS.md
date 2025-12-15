# Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to automatically generate versions and changelogs with semantic-release.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Commit Types

- **feat**: A new feature (triggers a MINOR release)
- **fix**: A bug fix (triggers a PATCH release)
- **docs**: Documentation changes
- **style**: Formatting changes that don't affect code
- **refactor**: Code refactoring without functionality changes
- **perf**: Performance improvements
- **test**: Adding or modifying tests
- **chore**: Changes to build process or auxiliary tools
- **ci**: CI configuration changes

## Breaking Changes

To trigger a MAJOR release, add `BREAKING CHANGE:` in the commit footer or use `!` after the type:

```
feat!: breaking compatibility change

BREAKING CHANGE: description of the breaking change
```

## Examples

```bash
# Patch release (0.0.1 -> 0.0.2)
git commit -m "fix: correct form validation error"

# Minor release (0.0.1 -> 0.1.0)
git commit -m "feat: add language selector"

# Major release (0.0.1 -> 1.0.0)
git commit -m "feat!: change API structure

BREAKING CHANGE: Endpoints now use /api/v2 instead of /api/v1"

# With scope
git commit -m "feat(client): add user profile page"
git commit -m "fix(server): fix health check timeout"
```

## Semantic Release

The project is configured with semantic-release which automatically:
- Analyzes commits using Conventional Commits
- Determines the version type (major, minor, patch)
- Generates CHANGELOG.md
- Creates a Git tag
- Publishes a release on GitHub

The process runs automatically in GitHub Actions when pushing to the `main` branch.
