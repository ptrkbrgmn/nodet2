// In app.js
import { AddressInfo } from "net";
import { fileURLToPath } from "url";
import { promises as fs } from "fs";

import { logger } from "./lib/logger";
import { setupApp } from "./lib/init/setup-app";

const app = setupApp();

export { app }; // Expose app to tests

// Only listen if started, not if included
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT) || 3000;
  const packageInfo = JSON.parse(await fs.readFile("./package.json", "utf-8"));
  const server = app.listen(port, () => {
    logger.info(
      "%s listening on port %d",
      packageInfo.name,
      (server.address() as AddressInfo)?.port
    );
  });
}
