# Backend seguro para Tutor IA

## Ejecución local
```bash
cd backend
npm install
cp .env.example .env
# edite .env y agregue OPENAI_API_KEY
npm start
```

No coloque claves privadas en `sitio-a/app.js` ni en HTML. En producción configure variables de entorno en Render, Railway, Fly.io, Vercel Functions o Netlify Functions.
