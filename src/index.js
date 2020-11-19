import React from "react";
import ReactDOM from "react-dom";
import ObservatoryApp from "./components/ObservatoryApp";
import WebsocketClient from "./wsclient";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<ObservatoryApp />, wrapper) : false;

const ws = new WebsocketClient();
ws.start();
