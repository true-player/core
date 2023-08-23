// rollup.config.mjs
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/core/index.ts",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "TruePlayer",
  },

  plugins: [typescript()],
};
