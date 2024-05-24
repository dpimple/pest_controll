/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // ...other settings
  server: "@remix-run/cloudflare-pages",
  serverBuildTarget: "cloudflare-pages",
  serverModuleFormat: "esm",
};
