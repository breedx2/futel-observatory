import React, { Component } from "react";
import ReactDOM from "react-dom";
import Caller from './Caller';

class CallersRow extends Component {

  render() {
    return (
      <div className="full-height valign-wrapper center-align">
        <div className="valign-wrapper center-align allCallers ">
          <Caller/>
          <Caller/>
          <Caller/>
          <Caller/>
        </div>
      </div>
    )
  }
}

export default CallersRow;
