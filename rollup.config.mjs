import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  // ESM build (tree-shakable)
  {
    input: "src/index.ts",
    output: {
      file: "dist/tweakr.esm.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [resolve(), typescript({ tsconfig: "./tsconfig.json" })],
    external: [],
  },

  // CJS build (Node.js)
  {
    input: "src/index.ts",
    output: {
      file: "dist/tweakr.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [resolve(), typescript({ tsconfig: "./tsconfig.json" })],
    external: [],
  },

  // Minified UMD build for browsers
  {
    input: "src/index.ts",
    output: {
      file: "dist/tweakr.min.js",
      format: "umd",
      name: "Tweakr", // Global variable in browsers
      sourcemap: true,
    },
    plugins: [
      resolve(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(), // Minify the UMD bundle
    ],
    external: [],
  },
];
