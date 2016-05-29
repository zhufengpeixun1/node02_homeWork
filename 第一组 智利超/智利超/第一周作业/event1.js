function Event(){
    this._events={};
}

Event.prototype.on= function (eventName, callBack) {
    if(this._events[eventName]){
        this._events[eventName].push(callBack);
    }else{
        this._events[eventName]=[callBack];
    }

};

Event.prototype.once= function (eventName, callBack) {
    function one(){
        callBack.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one);
};

Event.prototype.off=function(eventName,callBack){
    this._events[eventName]=this._events[eventName].filter(function (item) {
        return callBack!=item;
    })
};

Event.prototype.Emit= function (eventName) {
    var args=Array.prototype.slice.call(arguments,1);
    var _this=this;
    this._events[eventName].forEach(function (item) {
        item.apply(_this,args);
    })
};


function fn(a){
    console.log(a+'nihao');
}

var event=new Event();
event.once('123',fn);
//event.on('123',fn);
//event.on('123',fn);

event.Emit('123','kenbi');
event.Emit('123','kenbi');




