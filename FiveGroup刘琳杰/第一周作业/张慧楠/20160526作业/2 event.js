function Event(){
    this._events={};
}

Event.prototype.on=function(eventName,callBack){
    if(this._events[eventName]){
        this._events[eventName].push(callBack);
    }else {
        this._events[eventName]=[callBack];
    }
};
Event.prototype.once=function(eventName,callBack){
    function one(){
        callBack.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one);
};
Event.prototype.emit=function(eventName){
    var args=Array.prototype.slice.call(arguments,1);
    var ary=this._events[eventName];
    var _this=this;
    if(ary){
        ary.forEach(function(item){
            item.apply(_this,args);
        })
    }
};
Event.prototype.off=function(eventName,callBack){
    var ary=this._events[eventName];
    this._events[eventName]=ary.filter(function(item){
        return item!=callBack;
    })
};

var event=new Event();
function a(n){
    console.log(n+"个苹果");
}
event.on("zzz",a);
event.emit("zzz",1);
event.emit("zzz",1);

