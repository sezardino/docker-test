const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const app = express();

app.get("/test", (_, res) => {
  res.send("api works");
});

app.get("/test-auth", (_, res) => {
  res.json({ testAuth: true });
});

app.get("/auth-test", (_, res) => {
  axios.default
    .get(process.env.AUTH_API_URL + "/current-user")
    .then((response) => res.send({ testAuth: true, user: response.data }))
    .catch(console.log);
});

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() =>
    app.listen(port, () => console.log(`Server works on port: ${port}`))
  )
  .catch(() => console.log("error"));
