import React, { Component } from "react";

class Caller extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="caller">
      <h4>{this.props.name}</h4>
      {this.props.event}
      </div>
    )
  }
}

export default Caller;
