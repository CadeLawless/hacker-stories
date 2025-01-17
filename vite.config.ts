import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { configDefaults } from 'vitest/config'; // Import Vitest configuration defaults

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
});
