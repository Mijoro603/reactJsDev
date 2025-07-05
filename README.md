#  🚀 ReactJsDev (RVB – React + Vite + Biome) - Pour développer votre application front-end personnalisé avec reactjs + vitejs + Biomejs

Ce projet est une base légère et moderne React propulsée par **Vite** et formatée avec **BiomeJS**.

---

## ⚙️ Installation locale

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Mijoro603/reactJsDev.git
   cd reactJsDev
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez `vite.config.js` :

   - Le port par défaut utilisé est `5173` :
     ```js
     server: {
       port: 5173
     }
     ```

   - Vous pouvez le modifier librement (ex. pour `8080`) :
     ```js
     server: {
       port: 8080
     }
     ```

4. Branche recommandée :
   - N'utilisez **pas** `main` ni `dev` pour vos développements personnels.
   - Utilisez par exemple `master`, `trunk` ou `feature/nom`.

5. Démarrer le projet :
   ```bash
   npm run dev
   ```
   ✅ Accès ensuite à `http://localhost:8080` (ou selon le port défini).

---

## 🌐 Collaboration via CodeSandbox

1. Forkez le dépôt ou importez-le dans CodeSandbox.

2. Ouvrez `vite.config.js` et personnalisez le bloc suivant :

   ```js
   const allowedHosts =
     currentBranch === 'votre-branche' // remplacez par votre nom de branche
       ? ['votre_url_codesandbox-5173.csb.app'] // URL donnée par CodeSandbox
       : [];
   ```

   ✅ Conservez le port `5173` pour la compatibilité CodeSandbox.

3. Lancez le serveur avec :
   ```bash
   npm run dev
   ```

   Vous devriez voir dans les logs :
   ```
   [vite] connected.
   ```

---

## 🔧 Exemple de configuration dynamique dans `vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';

let currentBranch = 'unknown';
try {
  currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (e) {
  console.warn('Impossible de détecter la branche Git');
}

const allowedHosts =
  currentBranch === 'main'
    ? ['p4y6s6-5173.csb.app']
    : currentBranch === 'dev'
    ? ['h4ngjy-5173.csb.app']
    : currentBranch === 'votre-branche'
    ? ['votre_url_codesandbox-5173.csb.app']
    : [];

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts
  }
});
```

---

## 🔭 Fonctionnalités à venir

- 📘 Lecture de fichiers `mdx` pour un contenu dynamique
- 🎨 UI personnalisée avec `Bulma`, `Tailwind`, ou autre selon les préférences
- 📨 Partage de messages via fichiers statiques (`.json`, `.txt`) pour un chat collaboratif entre devs

---

Merci de votre collaboration !  
💡 N’hésitez pas à ouvrir une PR ou une issue si vous souhaitez contribuer.

**NB** Vous pouvez faire tous ce que vous voulez mais n'oublie jamais que vous êtes responsable de votre act.
