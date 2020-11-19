'use strict';

// server-side app

const port = 7000;
const express = require("express");
const app = express();
const expressWs = require('express-ws')(app);

app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("hello there.");
});

app.ws('/events', (ws, req) => {
  setInterval(() => {
    // console.log("Sending a thing to the websocket...");
    ws.send('oh hai ' + new Date());
  }, 1500);
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
