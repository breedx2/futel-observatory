import React, { Component } from "react";

class IdleHandy extends Component {

  constructor(props){
    super(props);
    this.timer = null;
    this.angle = 0.0001;
    this.state = {
      angle: 0
    }
  }

  componentDidMount(){
    const self = this;
    this.timer = setInterval(() => self.rotate(), 1000);
  }

  componentWillUnmount(){
    console.log('Stopping the ol handy timer');
    clearInterval(this.timer);
  }

  rotate(){
     const rang = Math.floor(Math.random() * Math.floor(1000));
     var delta = rang / 100.0;
     if(this.angle >= 0){
      delta = -1 * delta;
     }
     this.angle = this.angle + delta;
     const handy = document.getElementById('handy');
     handy.style.transform = `rotate(${this.angle}deg)`;
  }

  render(){
    return (<img id='handy' className="responsive-img" src='img/handy-circle.png'/>);
  }
}

export default IdleHandy;
