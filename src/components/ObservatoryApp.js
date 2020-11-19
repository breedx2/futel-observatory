import React, { Component } from "react";
import ReactDOM from "react-dom";
import CallersRow from './CallersRow';

class ObservatoryApp extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <CallersRow>
      {/*<form>
        <input
          type="text"
          value="hello react"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>*/}
      </CallersRow>
    );
  }
}

export default ObservatoryApp;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<ObservatoryApp />, wrapper) : false;
