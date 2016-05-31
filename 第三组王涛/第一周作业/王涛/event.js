/**
 * Created by Administrator on 2016/5/27.
 */

function Event(){
    this._events={};
}

Event.prototype.on=Event.prototype.addListener= function (eventName, callBack) {
  if(this._events[eventName]){
      this._events[eventName].push(callBack);
  }
    else{
      this._events[eventName]=[callBack];
  }
};

Event.prototype.off=Event.prototype.removeListener= function (eventName, callBack) {
  this._events[eventName]=this._events[eventName].filter(function (item) {
          return callBack!=item;
      }
  )
};

Event.prototype.once= function (eventName, callBack) {
    function one(){
        callBack.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one);

};


Event.prototype.Emit= function (eventName) {
    var args=Array.prototype.slice.call(arguments,1);
    var cur=this._events[eventName];
    var _this=this;
    cur.forEach(function (item) {
        item.apply(_this,args);
    })

};


var event=new Event();

function fn(a){
    console.log(a+"你好");
}

event.once("这个",fn);
event.Emit("这个","科比");
event.Emit("这个","科比");


