# CI/CD & Publishing Guide

## 🚀 Automatic Publishing

This repository is configured with GitHub Actions to automatically publish to npm when version changes are pushed to the `main` branch.

## 📝 How to Publish a New Version

### Method 1: Using the bump script (Recommended)

```bash
# Patch version (1.0.0 → 1.0.1)
./scripts/bump-version.sh patch

# Minor version (1.0.0 → 1.1.0)
./scripts/bump-version.sh minor

# Major version (1.0.0 → 2.0.0)
./scripts/bump-version.sh major

# Then push to trigger CI/CD
git push origin main
```

### Method 2: Manual version bump

1. Update the version in `package.json`:

    ```bash
    npm version patch  # or minor, major
    ```

2. Commit with a message containing `[publish]`:

    ```bash
    git add package.json
    git commit -m "chore: bump version to 1.0.1 [publish]"
    ```

3. Push to main:
    ```bash
    git push origin main
    ```

## 🔧 Setup Requirements

### 1. NPM Token Setup

Add your npm access token as a GitHub secret:

1. Go to [npmjs.com](https://www.npmjs.com/) → Account → Access Tokens
2. Create a new **Automation** token
3. In your GitHub repo: Settings → Secrets → Actions → New repository secret
4. Name: `NPM_TOKEN`
5. Value: Your npm token

### 2. GitHub Token

The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

## 🔍 CI/CD Pipeline Features

-   ✅ **Multi-Node Testing**: Tests on Node 16, 18, and 20
-   ✅ **Version Detection**: Only publishes when package.json version changes
-   ✅ **Duplicate Prevention**: Checks if version already exists on npm
-   ✅ **Automatic Tagging**: Creates git tags for releases
-   ✅ **GitHub Releases**: Creates release notes automatically
-   ✅ **Build Verification**: Ensures package builds successfully before publishing

## 📊 Workflow Triggers

The pipeline runs on:

-   **Push to main**: Full CI/CD including potential publishing
-   **Pull requests**: CI testing only
-   **Manual trigger**: Via GitHub Actions web interface

## 🚨 Important Notes

-   Only commits with version changes in `package.json` will trigger publishing
-   The workflow will fail if the version already exists on npm
-   Make sure to test locally before pushing version changes
-   All tests must pass before publishing
