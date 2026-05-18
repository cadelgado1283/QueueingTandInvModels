#!/usr/bin/env bash
set -euo pipefail

# Uso:
#   ./scripts/deploy-github.sh USUARIO NOMBRE_REPOSITORIO
# Ejemplo:
#   ./scripts/deploy-github.sh cadelgado12 io-ecosistema-web

USER_NAME="${1:-}"
REPO_NAME="${2:-}"

if [[ -z "$USER_NAME" || -z "$REPO_NAME" ]]; then
  echo "Uso: ./scripts/deploy-github.sh USUARIO NOMBRE_REPOSITORIO"
  exit 1
fi

if [[ ! -d .git ]]; then
  git init
fi

git add .
git commit -m "Publicar ecosistema web IO" || true
git branch -M main

if ! git remote get-url origin >/dev/null 2>&1; then
  git remote add origin "https://github.com/${USER_NAME}/${REPO_NAME}.git"
else
  git remote set-url origin "https://github.com/${USER_NAME}/${REPO_NAME}.git"
fi

git push -u origin main

echo "Subido a GitHub. Ahora active GitHub Pages con GitHub Actions en Settings > Pages."
