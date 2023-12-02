import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";

// https://stackoverflow.com/a/75480206
const filesNeedToExclude = ["src/stories"];
const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/lib/*.(ts|tsx)", "src/utils.ts"],
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: [
        path.resolve(__dirname, "src/lib/index.ts"),
        path.resolve(__dirname, "src/utils.ts"),
      ],
      name: "rt-puc",
      formats: ["es"],
      fileName: (format, entryName) => {
        if (entryName === "utils") {
          return `rt-puc-utils.${format}.js`;
        }

        return `rt-puc.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", ...filesPathToExclude],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
