import React, { Component } from "react";
import ReactDOM from "react-dom";

class Caller extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div clasName="col m2">
        <div className="row caller-container">
          <div className="col s12 m6">
            <div className="card brown lighten-2">
              <div className="card-content white-text">
                <span className="card-title text-bold"><h3>Some Caller</h3></span>
                <p>text + visual description of what they're doing</p>
              </div>
              <div className="card-action">
                <a href="#">other?</a>
                <a href="#">info?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Caller;
