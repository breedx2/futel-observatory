import React, { Component } from "react";
import ReactDOM from "react-dom";
import CallersRow from './CallersRow';
import IdleScreen from './IdleScreen';

class ObservatoryApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idle: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(msg, stateTracker) {
    this.setState(() => {
      return {
        idle: stateTracker.isIdle()
      };
    });
  }

  render() {
    if(this.state.idle){
      return (<IdleScreen/>);
    }
    return (<CallersRow/>);
  }
}

export default ObservatoryApp;
