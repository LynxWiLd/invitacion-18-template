Despliegue a GitHub Pages

Pasos para publicar este proyecto en GitHub Pages usando el workflow de Actions incluido.

1) Crear el repositorio en GitHub (por ejemplo `username/template-invite`).

2) En tu máquina local, inicializar git y empujar al remoto:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<TU_USUARIO>/<TU_REPO>.git
git push -u origin main
```

3) El workflow `.github/workflows/deploy.yml` se ejecutará automáticamente en cada `push` a `main`. Construye con `npm run build` y publica `./dist` en la rama `gh-pages`.

4) Esperá a que se complete la acción en GitHub (Actions → build-and-deploy). Cuando termine, la página estará disponible en:

- `https://<TU_USUARIO>.github.io/<TU_REPO>/` (si el repo es de usuario/organización)

Notas opcionales:
- Si querés usar un dominio personalizado, colocá `CNAME` en `public/` o configurá `peaceiris/actions-gh-pages` con `cname`.
- Si preferís publicar desde la rama `main` en vez de `gh-pages`, cambia la estrategia y/o usa `github-pages` settings.
