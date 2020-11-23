import React, { Component } from "react";
import Caller from './Caller';

class CallersRow extends Component {

  constructor(props){
    super(props);
  }

  _buildCallers(){
    return this.props.callers.map(caller => {
      const name = caller.lastMsgRaw.event.CallerIDNum;
      var event = caller.lastMsgRaw.event.Event;
      if(event === 'UserEvent'){
        event = caller.lastMsgRaw.event.UserEvent;
      }
      console.log(JSON.stringify(caller));
      return (<Caller name={name} event={event}/>);
    });
  }

  render() {
    return (
      <div className="full-height valign-wrapper center-align">
        <div className="valign-wrapper center-align allCallers">
          {this._buildCallers()}
        </div>
      </div>
    )
  }
}

export default CallersRow;
