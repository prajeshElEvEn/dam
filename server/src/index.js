const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const { auth, user, todo } = require("./src/routes");
const loadEnv = require("./utils/env");

const startServer = () => {
  const currentEnv = loadEnv();
  const port = process.env.PORT || 5000;
  const hostname = process.env.HOSTNAME || "127.0.0.1";
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/auth", auth);
  app.use("/api/users", user);
  app.use("/api/todos", todo);

  app.use(errorHandler);

  app.listen(port, hostname, async () => {
    warn(`Current environment: ${currentEnv}`);
    await db();
    log(`Server running at http://${hostname}:${port}`);
  });
};

startServer();
