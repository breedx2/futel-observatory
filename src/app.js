'use strict';

// server-side app

const port = 7000;
const express = require("express");
const app = express();
const expressWs = require('express-ws')(app);

const pred = require('futel-sqs-consumer/src/predicates');
const FutelConsumerBuilder = require('futel-sqs-consumer/src/builder');
const env = require('futel-sqs-consumer/env.json');
const ServerWebsocket = require('./wsserver');

app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("hello there.");
});

const wsserver = new ServerWebsocket();

app.ws('/events', (ws, req) => {
  wsserver.configure(ws);
});

const msgHandler = pred.standard(m => wsserver.sendToAllClients(m));

const sqsConsumer = new FutelConsumerBuilder()
  .withRegion(env.region)
  .withAwsProfile(env.profile)
  .withQueueUrl(env.url)
  .withBatchSize(10)
  .withPollDurationSeconds(10)
  .addHandler(msgHandler)
  .build();

app.listen(port, () => {
  console.log(`server started on port ${port}`);
  sqsConsumer.runForever();
});
