function Event(){
    this.events = {};
}


//绑定方法
Event.prototype.on = function (eventName,callback) {
    if(this.events[eventName]){
        this.events[eventName].push(callback);
    }else{
        this.events[eventName] = [callback];
    }
};



//解除方法
Event.prototype.off = function(eventName,callback){
    var cur = this.events[eventName];

    this.events[eventName] =cur.filter(function (item) {
        return callback!=item;
    });
};

//执行一次
Event.prototype.once = function (eventName,callback) {
    function one(){
        callback.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one);
};



//执行方法
Event.prototype.emit = function (eventName) {
    var parameter= Array.prototype.slice.call(arguments,1);
    var cur = this.events[eventName];
    var _this = this;
    if(cur){
        cur.forEach(function (item) {
            item.apply(_this,parameter);
        });
    }
};







var event = new Event();




function pay(who){
    console.log(who+"发完了工资");
}




event.once("发工资了",pay);
//event.emit("发工资了","张三");
//event.emit("发工资了","李四");
//event.emit("发工资了","王二麻子");



