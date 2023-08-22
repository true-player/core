// rollup.config.mjs
export default {
  input: "tsc-output/main.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "trueplayer",
  },
};
