import React, { Component } from "react";
import Caller from './Caller';

class CallersRow extends Component {

  constructor(props){
    super(props);
  }

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
