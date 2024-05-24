import { createRequestHandler } from "@remix-run/cloudflare-pages";

export const onRequest = createRequestHandler({
  build: require("./build")
});
