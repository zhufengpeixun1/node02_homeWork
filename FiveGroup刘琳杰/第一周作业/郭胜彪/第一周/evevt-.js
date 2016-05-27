/**
 * Created by tangsuan on 2016/5/27.
 */

//---------------->事件绑定 移除 执行  只执行一次
function Event(){
    this._event={};
}
Event.prototype.on=function(name,callback){
    if(this._event[name]){
        this._event[name].push(callback);
    }else {
        this._event[name]=[callback];
    }
};
Event.prototype.off=function(name,callback){
    var cur=this._event[name];
    if(cur){
        this._event[name]=cur.filter(function(item){
            return callback!=item;
        })
    }
};
Event.prototype.emit=function(name){
    var args=[].slice.call(arguments,1);
    var cur=this._event[name];var that=this;
    if(cur){
        cur.forEach(function(item){
            item.apply(that,args);
        })
    }

};
Event.prototype.once=function(name,callback){
    function one(){
        callback.apply(this,arguments);
        this.off(name,one);
    }
    this.on(name,one);
};

var event1=new Event();