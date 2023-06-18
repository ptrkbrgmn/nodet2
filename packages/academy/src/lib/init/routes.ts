import { Express, Request, Response } from "express";
// import { isEven } from "@nodet2/core/src/lib/shared";

export function routes(app: Express) {
  app.get("/", (_req: Request, res: Response) => {
    // const x = isEven(2);
    // const str = `Hello from academy. x is ${x}`;
    // res.send(
    //   `<html><body style='background: red'><h1 style='color: white'>${str}</h1></body></html>`
    // );
    res.send(
      "<html><body style='background: red'><h1 style='color: white'>Hello from academy-api</h1></body></html>"
    );
  });
}
