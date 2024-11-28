import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/lib'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      // name: 'Templates',
      formats: ['es', 'umd'],
      name: 'Templates',
      fileName: format => `templates.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  define: {
    'process.env': {},
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const baseName =
          filename!
            .split('/')
            .pop()
            ?.replace(/\.module\.css$/, '') || 'default';
        return `tp__${baseName}__${name}`;
      },
    },
  },
});
