'use strict';

class ServerWebsocket {

  constructor(){
    this.clients = [];
  }

  configure(ws){
    const self = this;
    this.clients.push(ws);
    ws.on('error', e => {
    		console.log(`server error on websocket: ${e}`);
        self._remove(ws);
    	});
  	ws.on('close', e => {
  		  console.log(`client closed websocket: ${e}`);
        self._remove(ws);
      });
  }

  sendToAllClients(msg){
    process.stdout.write('.');
    this.clients.forEach((ws, i) => {
      ws.send(JSON.stringify(msg));
    });
  }

  _remove(ws){
    this.clients = this.clients.filter(x => x !== ws);
  }
}

module.exports = ServerWebsocket;
