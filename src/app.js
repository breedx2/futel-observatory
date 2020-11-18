'use strict';

const port = 7000;
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello there.");
});


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});