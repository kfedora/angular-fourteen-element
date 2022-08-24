const concat = require("concat");

(async function build() {
  const files = [
    "./dist/angularfourteenelement/runtime.js",
    "./dist/angularfourteenelement/polyfills.js",
    "./dist/angularfourteenelement/main.js",
  ];
  await concat(files, "./dist/angularfourteenelement/helloworld.js");
})();
