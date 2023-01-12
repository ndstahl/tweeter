const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const feeds = require("./routes/feed");

const start = () => {
  app.use(express.json());
  app.use("/api/feeds", feeds);

  app.listen(port, () => {
    console.log("server started on port", port);
  });
};

start();
