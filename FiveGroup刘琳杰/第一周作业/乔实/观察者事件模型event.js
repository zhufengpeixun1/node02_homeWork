/**
 * Created by qiaoshi on 2016/5/26.
 */
function Event(){this._event={};}
Event.prototype.on=function(eventName,callback){
    var cur=this._event[eventName];
    if(cur){
        cur.push(callback);
    }else{
        this._event[eventName]=[callback];
    }
};
Event.prototype.emit=function(eventName){
    var args=[].slice.call(arguments,1);
    var cur=this._event[eventName];
    var _this=this;
    if(cur){
        cur.forEach(function(item){
            item.apply(_this,args);
        })
    }
};
Event.prototype.off=function(eventName,callback){
    var cur=this._event[eventName];
    if(cur){
     this._event[eventName]=cur.filter(function(item){
            return callback!=item;
        })
    }
};
Event.prototype.once=function(eventName,callback){
    function one(){
        var _this=this;
        var args=[].slice.call(arguments,0);
        callback.apply(_this,args);
        this.off(eventName,one);
    }
    this.on(eventName,one);
};
function eat(who){
    console.log(who+'吃饭');
}
var a=new Event;
a.on('饿了',eat);
a.emit('饿了','乔实'); //输出
a.off('饿了',eat);
a.emit('饿了','乔实'); //没有输出
a.once('饿了',eat);
a.emit('饿了','乔实'); //输出
a.emit('饿了','乔实');  //没有输出

