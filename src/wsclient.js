'use strict';

class WebsocketClient {

  //TODO: Needs reconnection logic...

  start(){
    const url = `${location.protocol.replace(/http/, 'ws')}//${location.host}/events`;
    this.socket = new WebSocket(url);
    this.wantReconnect = true;
    this.socket.addEventListener('open', e => this.onOpen(e));
    this.socket.addEventListener('message', e => this.onMessage(e));
    this.socket.addEventListener('close', e => this.onClose(e));
    this.socket.addEventListener('error', e => this.onError(e));
  }

  onOpen(event){
    console.log('websocket connected');
  }

  onMessage(message){
    console.log(message);
    if(message.data.startsWith('{')){
      const event = JSON.parse(message.data);
      // return "something else";

      // return handleControlEvent(JSON.parse(event.data), this.eventActions, this.clientId);
    }
    console.log(`recv: `, message.data);
  }

  onClose(event){
    console.log('websocket closed.');
    this.socket.close();
  }

  onError(event){
    console.log('websocket error: ', event);
  }
}

export default WebsocketClient;
