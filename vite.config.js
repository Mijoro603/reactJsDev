import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from "child_process";

let currentBranch = "unknown";

try {
  currentBranch = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();
} catch (error) {
  console.warn("⚠️ Impossible de déterminer la branche Git :", error.message);
}

const allowedHosts =
  currentBranch === "main"
    ? ["p4y6s6-5173.csb.app"]
    : currentBranch === "dev"
    ? ["h4ngjy-5173.csb.app"]
    : ["localhost"];

/* console.log(`🌿 Branche Git détectée : ${currentBranch}`);
console.log(`🔐 allowedHosts : ${JSON.stringify(allowedHosts)}`); */

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permet l'accès externe (utile sur CodeSandbox ou en réseau local)
    port: 5173, // Port par défaut de Vite
    strictPort: true, // Évite que Vite change de port automatiquement
    open: false, // Ne pas ouvrir automatiquement dans le navigateur
    allowedHosts,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  build: {
    outDir: "dist", // Répertoire de sortie personnalisé (optionnel)
    sourcemap: true, // Génère les fichiers .map pour le debug (utile en dev)
  },
});
