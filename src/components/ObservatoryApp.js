import React, { Component } from "react";
import ReactDOM from "react-dom";
import CallersRow from './CallersRow';
import IdleScreen from './IdleScreen';

class ObservatoryApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idle: true,
      callers: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(msg, stateTracker) {
    this.setState(() => {
      return {
        idle: stateTracker.isIdle(),
        callers: stateTracker.getCallers()
      };
    });
  }

  render() {
    if(this.state.idle){
      return (<IdleScreen/>);
    }
    return (<CallersRow callers={this.state.callers}/>);
  }
}

export default ObservatoryApp;
