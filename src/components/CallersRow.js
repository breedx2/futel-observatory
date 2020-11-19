import React, { Component } from "react";
import ReactDOM from "react-dom";
import Caller from './Caller';

class CallersRow extends Component {

  render() {
    return (
      <div>
          <div className="row">
            <div className="col s1">test1</div>
            <div className="col s1">test2</div>
            <div className="col s1">test3</div>
            <div className="col s1">test4</div>
            <div className="col s1">test5</div>
            <div className="col s1">test6</div>
            <div className="col s1">test7</div>
            <div className="col s1">test8</div>
            <div className="col s1">test9</div>
            <div className="col s1">test10</div>
            <div className="col s1">test11</div>
            <div className="col s1">test12</div>
          </div>
        <div className="row">
          <Caller/>
          <Caller/>
        </div>
      </div>
    )
  }

}
export default CallersRow;
