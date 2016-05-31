function Event() {
    this._events = {};
}

//监听事件
Event.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._event[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};

//触发一次，只绑定一次
Event.prototype.once = function (eventName, callback) {
    function one() {
        callback.apply(this, arguments);
        this.off(eventName, one);
    }

    this.on(eventName, one);
};

//将数组里的函数等于callback移除掉
Event.prototype.off = function (eventName, callback) {
    var cur = this._events[eventName];
    this._events[eventName] = cur.filter(function (item) {
        return callback != item;
    });
};

//发射事件
Event.prototype.emit = function (eventName) {
    var args = Array.prototype.slice.call(arguments, 1);
    var cur = this._events[eventName];
    var that = this;
    if (cur) {
        cur.forEach(function (item) {
            item.apply(that, args);
        });
    }
};

var event = new Event();
function eat(who){
    console.log(who+'吃饭');
}

event.once('我饿了',eat);
event.emit('我饿了','珠峰');
event.emit('我饿了','珠峰');