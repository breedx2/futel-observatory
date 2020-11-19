import React, { Component } from "react";

import IdleHandy from './IdleHandy';

class IdleScreen extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="full-height valign-wrapper center-align">
        <div className="valign-wrapper center-align allCallers ">
          <IdleHandy/>
          <audio autoplay="true" loop="true" src="audio/ipamidi.mp3"/>
        </div>
      </div>
    );
  }

}

export default IdleScreen;
