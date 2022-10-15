import glsl from "vite-plugin-glsl";
import path, { resolve } from "path";
import { defineConfig } from "vite";

module.exports = defineConfig({
  plugins: [
    glsl({
      exclude: undefined, // File paths/extensions to ignore
      include: /\.(glsl|wgsl|vert|frag|vs|fs)$/i, // File paths/extensions to import
      defaultExtension: "glsl", // Shader suffix when no extension is specified
      warnDuplicatedImports: true, // Warn if the same chunk was imported multiple times
      compress: false, // Compress the resulting shader code
      watch: true, // Recompile shader on chunk change
      root: "/", // Directory for root imports
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src"),
      "@Experience": path.resolve(__dirname, "./src/Experience"),
      "@Utils": path.resolve(__dirname, "./src/Experience/Utils"),
      "@World": path.resolve(__dirname, "./src/Experience/World"),
    },
  },
  assetsInclude: ["**/*.gltf", "**/*.glb", "**/*.mp4", "**/*.json"],
});
