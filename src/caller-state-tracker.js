'use strict';

// Keeps track of caller state on the client side of things
class CallerStateTracker {

  constructor(){
    this.callers = {};
  }

  update(msg){
    const uid = msg.event.Uniqueid;
    console.log(`uid = ${uid}`);
    if(uid in this.callers){
      return this._updateExisting(msg, this.callers[uid]);
    }
    this.callers[uid] = {
      uid: uid,
      lastMsgRaw: msg,
      lastEvent: msg.event.UserEvent
    };
    console.log(`created: ${this.callers[uid]}`)
  }

  isIdle(){
    return Object.keys(this.callers).length == 0;
  }

  getCallers(){
    //TODO: Don't leak this, make a copy!
    return Object.values(this.callers);
  }

  _updateExisting(msg, caller){
    caller.lastMsgRaw = msg;
    caller.lastEvent = msg.event.UserEvent;
    // console.log(`FAKE Updating existing caller: ${caller.uid}`);
    //TODO: Actually update something interesting...
    //TODO: Remove caller on the various HANGUP types
  }

}

module.exports = CallerStateTracker;
