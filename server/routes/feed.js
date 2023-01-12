const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const feeds = await axios.get(
    "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
  );
  res.json(feeds.data);
});

module.exports = router;
