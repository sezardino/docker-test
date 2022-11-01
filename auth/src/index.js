const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const app = express();

app.get("/test", (_, res) => {
  res.send("auth works");
});

app.get("/api-test", (_, res) => {
  console.log(process.env.API_URL)
  axios.default
    .get(process.env.API_URL + "/test-auth")
    .then((response) => res.json({ fromAuth: true, ...response.data }))
    .catch(console.log);
});

app.get("/test-api", (_, res) => {
  res.send({ user: "123", email: "foo@gmail.com" });
});

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() =>
    app.listen(port, () => console.log(`Auth Server works on port: ${port}`))
  )
  .catch(() => console.log("error"));
