import React, { Component } from "react";
import ReactDOM from "react-dom";
import CallersRow from './CallersRow';

class ObservatoryApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idle: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, stateTracker) {
    // const { value } = event.target;
    this.setState(() => {
      return {
        idle: stateTracker.isIdle()
      };
    });
  }

  render() {
    if(this.state.idle){
      return (<div>boring</div>);
    }
    return (
        <CallersRow/>
    );
  }
}

export default ObservatoryApp;
