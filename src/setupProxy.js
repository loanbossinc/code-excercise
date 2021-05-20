/* eslint-disable func-names */
/**
 * This file manages api proxies for local development
 * Refer: https://create-react-app.dev/docs/proxying-api-requests-in-development
 */
const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/report-groups",
    createProxyMiddleware({
      target: "http://localhost:3002",
      changeOrigin: true
    })
  );

  app.use(
    "/fields",
    createProxyMiddleware({
      target: "http://localhost:3003",
      changeOrigin: true
    })
  );

  app.use(
    "/source-files",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true
    })
  );

  app.use(
    "/report-components",
    createProxyMiddleware({
      target: "http://localhost:3004",
      changeOrigin: true
    })
  );
};
