import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

const toJsStringVariablePlugin = (fileName: string) => {
  return {
    name: "rollup-plugin-to-js-string-variable",
    generateBundle(_options: any, bundle: { [x: string]: any }) {
      const inputFilenames = Object.keys(bundle);
      const source = `const app = {${inputFilenames
        .map((fileName) => {
          const fileSource = bundle[fileName].code || bundle[fileName].source;
          return `"${fileName}": ${JSON.stringify(fileSource)}`;
        })
        .join(",")}}`;

      inputFilenames.forEach((fileName) => {
        delete bundle[fileName];
      });

      this.emitFile({
        type: "asset",
        name: fileName,
        fileName,
        source,
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    define: {
      "process.env": {
        NODE_ENV: "production",
      },
    },
    publicDir: command === "serve" ? "public" : false,
    build: {
      outDir: "apps-script/client",
      emptyOutDir: false,
      sourcemap: "inline",
      target: "esnext",
      lib: {
        entry: path.resolve(__dirname, "src/main.tsx"),
        name: "reactApp",
        formats: ["iife"],
        fileName: (_format) => `app.js`,
      },
      rollupOptions: {
        plugins: [toJsStringVariablePlugin("reactApp.js")],
      },
    },
  };
});
