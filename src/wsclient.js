'use strict';

class WebsocketClient {

  //TODO: Needs reconnection logic...

  constructor(handler){
    this.handler = handler;
  }

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
    if(message.data.startsWith('{')){
      const event = JSON.parse(message.data);
      return this.handler(event);
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
