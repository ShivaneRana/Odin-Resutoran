#!/bin/bash
npx webpack
git add dist
git commit -m "bundling complete"
git subtree push --prefix dist origin gh-pages
git push