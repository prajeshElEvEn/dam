const express = require("express");
const cors = require("cors");
const { env, log, success, db } = require("./server/utils");
const constants = require("./constants");
const { errorHandler } = require("./server/middlewares/errorMiddlewares");
const { auth } = require("./server/routes");

function startServer() {
  env();
  const port = process.env.PORT || 5000;
  const hostname = process.env.HOSTNAME || "127.0.0.1";
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/uploads", express.static(constants.paths.uploadDir));

  app.use("/api/auth", auth);

  app.use(errorHandler);

  app.listen(port, hostname, async () => {
    await db();
    success(`Server running at http://${hostname}:${port}`);
  });
}

startServer();
