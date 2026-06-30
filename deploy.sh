#!/bin/bash
set -e
cd "$(dirname "$0")"
git pull
npm install
npm run build
echo "✅ garrettcreates.com deployed"
