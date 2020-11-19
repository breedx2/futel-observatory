import React from "react";
import ReactDOM from "react-dom";
import ObservatoryApp from "./components/ObservatoryApp";
import WebsocketClient from "./wsclient";
import CallerStateTracker from "./caller-state-tracker";

const wrapper = document.getElementById("container");
const app = ReactDOM.render(<ObservatoryApp />, wrapper);

const stateTracker = new CallerStateTracker();

const messageHandler = msg => {
  stateTracker.update(msg);
  // console.log("FAKE HANDLER HERE " + JSON.stringify(msg));
  app.handleChange(msg, stateTracker);
}
const ws = new WebsocketClient(messageHandler);
ws.start();
