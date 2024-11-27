import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import path from "path";
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "Templates",
      formats:["es", "umd"],
      fileName: (format) => `templates.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const baseName = (filename!.split('/').pop()?.replace(/\.module\.css$/, '')) || 'default';
        return `tp__${baseName}__${name}`;
      },
    }
  }
})
