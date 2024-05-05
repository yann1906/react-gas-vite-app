import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import { readdirSync, statSync, copyFileSync, mkdirSync, existsSync } from "fs";

process.env.DISABLE_SOURCE_MAPS = "true";

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

// Function to recursively copy files and directories
const copyRecursiveSync = (src: string, dest: string) => {
  const exists = statSync(src).isDirectory();
  const stats = exists && readdirSync(src);

  if (exists && stats) {
    if (!existsSync(dest)) {
      mkdirSync(dest);
    }
    stats.forEach((childItemName) => {
      const srcPath = path.resolve(src, childItemName);
      const destPath = path.resolve(dest, childItemName);
      if (statSync(srcPath).isDirectory()) {
        copyRecursiveSync(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Copy public directory to output directory
  if (command !== "serve") {
    const publicDir = path.resolve(__dirname, "public");
    const outDir = path.resolve(__dirname, "apps-script/client");
    copyRecursiveSync(publicDir, outDir);
  }

  return {
    plugins: [react()],
    define: {
      "process.env": {
        NODE_ENV: "development",
        // NODE_ENV: "production",
      },
    },
    publicDir:
      command === "serve"
        ? "public"
        : path.resolve(__dirname, "apps-script/client"),
    build: {
      outDir: path.resolve(__dirname, "apps-script/client"),
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
