const express = require("express");
const axios = require("axios");

const app = express();
const IGDB_API_KEY = "YOUR_API_KEY";
const IGDB_API_URL = "https://api.igdb.com/v4";

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.all("/igdb/*", async (req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${IGDB_API_URL}${req.url.replace("/igdb", "")}`,
      headers: {
        Accept: "application/json",
        "user-key": IGDB_API_KEY,
      },
      data: req.body,
    });
    res.status(response.status);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(error.response.status);
    res.json(error.response.data);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
