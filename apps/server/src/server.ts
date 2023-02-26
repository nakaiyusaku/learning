import * as http from "http";
import { IRouter } from "./router";

export class HTTPServer {
  private port: number;
  private hostname: string;
  private server: http.Server;

  constructor({
    router,
    port = 12345,
    hostname = "localhost",
  }: {
    router: IRouter;
    port: number;
    hostname?: string;
  }) {
    this.port = port;
    this.hostname = hostname;

    this.server = http.createServer(router.getRequestHandler());
  }

  public start() {
    this.server.listen(this.port, this.hostname);
  }
}
