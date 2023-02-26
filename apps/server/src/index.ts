import { DefaultRouter } from "./router";
import { HTTPServer } from "./server";

const hostname = "0.0.0.0";
const port = 12345;

const server = new HTTPServer({
  router: new DefaultRouter({
    baseUrl: `http://${hostname}:${port}`,
  }),
  port,
  hostname,
});
server.start();
