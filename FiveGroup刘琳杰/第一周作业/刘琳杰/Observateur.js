function Event() {
    this._myevent = {};
}
Event.prototype.on = function (eventName, callback) {
    var cur = this._myevent[eventName];
    if (cur) {
        cur.push(callback);
    } else {
        this._myevent[eventName] = [callback];
    }
};
Event.prototype.emit = function (eventName) {
    var args = [].slice.call(arguments, 1);
    var cur = this._myevent[eventName];
    var _this = this;
    if (cur) {
        cur.forEach(function (item) {
            item.apply(_this, args);
        })
    }
};
Event.prototype.off = function (eventName, callback) {
    var cur = this._myevent[eventName];
    if (cur) {
        this._myevent[eventName] = cur.filter(function (item) {
            return callback != item;
        })
    }
};
Event.prototype.once = function (eventName, callback) {
    function one() {
        var _this = this;
        var args = [].slice.call(arguments, 0);
        callback.apply(_this, args);
        this.off(eventName, one);
    }

    this.on(eventName, one);
};
function eat(who) {
    console.log(who + '吃饭');
}
var a = new Event();
a.on('event', eat);
a.emit('event', '我');
a.off('event', eat);
a.emit('event', '我');
a.once('event', eat);
a.emit('event', '我');
a.emit('event', '我');

