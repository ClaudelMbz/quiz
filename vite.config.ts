import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Remplace 'nom-de-ton-repo' par le nom de ton dépôt GitHub
  // Exemple: si ton repo est https://github.com/monpseudo/quiz-isolation
  // alors mets: base: '/quiz-isolation/',
  base: '/quiz/', 
})