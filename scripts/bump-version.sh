#!/bin/bash

# Version bump script
# Usage: ./scripts/bump-version.sh [patch|minor|major]

set -e

VERSION_TYPE=${1:-patch}

echo "Bumping $VERSION_TYPE version..."

# Bump version using npm
npm version $VERSION_TYPE --no-git-tag-version

# Get the new version
NEW_VERSION=$(node -p "require('./package.json').version")

echo "Version bumped to $NEW_VERSION"

# Add changes to git
git add package.json package-lock.json

echo "Committing version bump..."
git commit -m "chore: bump version to $NEW_VERSION [publish]"

echo "Ready to push! Run: git push origin main"
echo "This will trigger the CI/CD pipeline to publish version $NEW_VERSION"