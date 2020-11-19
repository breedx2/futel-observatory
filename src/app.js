'use strict';

// server-side app

const port = 7000;
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("hello there.");
});


app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
