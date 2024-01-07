const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorMiddleware");
const loadEnv = require("./utils/env");
const db = require("./utils/db");
const { warn, log } = require("logggger");

const startServer = () => {
  const currentEnv = loadEnv();
  const port = process.env.PORT || 5000;
  const hostname = process.env.HOSTNAME || "127.0.0.1";
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/auth", require("./routes/authRoutes"));
  app.use("/api/users", require("./routes/userRoutes"));

  app.use(errorHandler);

  app.listen(port, hostname, async () => {
    warn(`Current environment: ${currentEnv}`);
    await db();
    log(`Server running at http://${hostname}:${port}`);
  });
};

startServer();
