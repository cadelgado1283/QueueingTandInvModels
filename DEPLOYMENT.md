# Guía para subir a GitHub y desplegar IO Lab

## Opción 1: GitHub Pages con GitHub Actions

### 1. Crear repositorio
Cree un repositorio vacío en GitHub, por ejemplo:

```bash
io-ecosistema-web
```

No agregue README, `.gitignore` ni licencia desde GitHub si ya usará esta carpeta.

### 2. Subir archivos
Desde la carpeta raíz del proyecto:

```bash
git init
git add .
git commit -m "Publicar ecosistema web IO"
git branch -M main
git remote add origin https://github.com/USUARIO/io-ecosistema-web.git
git push -u origin main
```

También puede usar el script incluido:

```bash
./scripts/deploy-github.sh USUARIO io-ecosistema-web
```

### 3. Activar GitHub Pages
En el repositorio:

1. Vaya a **Settings**.
2. Abra **Pages**.
3. En **Build and deployment**, seleccione **GitHub Actions**.
4. Haga push a `main` o ejecute manualmente el workflow `Deploy static site to GitHub Pages`.

El archivo `.github/workflows/deploy-github-pages.yml` publica todo el sitio estático.

### 4. URLs esperadas

```text
https://USUARIO.github.io/io-ecosistema-web/
https://USUARIO.github.io/io-ecosistema-web/sitio-a/
https://USUARIO.github.io/io-ecosistema-web/sitio-b/
```

## Opción 2: Netlify

### Despliegue por interfaz
1. Entre a Netlify.
2. Seleccione **Add new site** → **Import an existing project**.
3. Conecte el repositorio.
4. Use esta configuración:
   - Build command: vacío
   - Publish directory: `.`
5. Despliegue.

### Despliegue por CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir .
netlify deploy --prod --dir .
```

El archivo `netlify.toml` redirige `/` hacia `/sitio-a/`.

## Opción 3: Vercel

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

El archivo `vercel.json` conserva rutas limpias y redirige `/` hacia `/sitio-a/`.

## Backend del Tutor IA

El sitio frontend funciona sin backend en **Modo Demo**. Para activar integración real:

```bash
cd backend
npm install
cp .env.example .env
```

Edite `.env`:

```text
OPENAI_API_KEY=su_clave_privada
PORT=3000
```

Luego:

```bash
npm start
```

No suba `.env` al repositorio. Ya está protegido por `.gitignore`.

## Checklist antes de publicar

- `npm run check` desde la raíz.
- Abrir localmente `http://localhost:8080/sitio-a/`.
- Abrir localmente `http://localhost:8080/sitio-b/`.
- Probar buscador, quices, gráficos y MathJax.
- Confirmar que `.env` no fue agregado al commit.
- Confirmar que GitHub Pages usa **GitHub Actions** o Netlify/Vercel usa publish directory `.`.
