import * as http from "http";

type RequestHandler = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => void;

export interface IRouter {
  getRequestHandler(): RequestHandler;
}

export class DefaultRouter implements IRouter {
  private requestHandler: RequestHandler;

  constructor({ baseUrl = "http://localhost:12345" }: { baseUrl: string }) {
    this.requestHandler = (req, res) => {
      if (!req.url) return;

      const url = new URL(req.url, baseUrl);
      console.log(`Request received. JSON: ${decodeURI(url.toJSON())}`);
      const splittedPath = url.pathname.split("/");

      // GET /user/{userID}
      if (
        req.method === "GET" &&
        splittedPath.length === 3 &&
        splittedPath[1] === "user" &&
        !url.search
      ) {
        const userID = splittedPath[2];
        if (userID === "") {
          res.writeHead(400);
          res.end();
          return;
        }

        const reqExp = /^[a-zA-Z]{1}[a-zA-Z0-9]{7,9}$/;
        if (reqExp.test(userID)) {
          res.writeHead(200, "Success", {
            "Content-Type": "text/plain",
          });
          res.write("ok");
          res.end();
          return;
        }
      }

      // GET /hiragana/{hiragana}
      if (
        req.method === "GET" &&
        splittedPath.length === 3 &&
        splittedPath[1] === "hiragana" &&
        !url.search
      ) {
        const hiragana = decodeURI(splittedPath[2]);
        const reqExp = /^[ぁ-んー]+$/;
        if (reqExp.test(hiragana)) {
          res.writeHead(200, "Success", {
            "Content-Type": "text/plain",
          });
          res.write("OK");
          res.end();
          return;
        }

        res.writeHead(400);
        res.write("NG");
        res.end();
        return;
      }

      // GET /katakana/{katakana}
      if (
        req.method === "GET" &&
        splittedPath.length === 3 &&
        splittedPath[1] === "katakana" &&
        !url.search
      ) {
        const katakana = decodeURI(splittedPath[2]);
        const reqExp = /^[ァ-ヶー]+$/;
        if (reqExp.test(katakana)) {
          res.writeHead(200, "Success", {
            "Content-Type": "text/plain",
          });
          res.write("OK");
          res.end();
          return;
        }

        res.writeHead(400);
        res.write("NG");
        res.end();
        return;
      }

      // 上記以外のGET以外のmethodは400
      if (req.method !== "GET") {
        res.writeHead(400);
        res.end();
        return;
      }

      // 上記以外は422
      res.writeHead(422);
      res.end();
    };
  }

  public getRequestHandler() {
    return this.requestHandler;
  }
}
