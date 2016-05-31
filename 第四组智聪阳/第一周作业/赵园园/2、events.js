function Event() {
    this.events = {};
}
Event.prototype.on = function (event, callback) {
    if (this.events[event]) {
        this.events[event].push([callback]);
    } else {
        this.events[event] = [callback];
    }
};
Event.prototype.once = function (event, callback) {
    function one() {
        callback.apply(this, arguments);
        this.off(event, one);
    }

    this.on(event, one);
};
Event.prototype.emit = function (event) {
    var args = Array.prototype.slice.call(arguments, 1),
        cur = this.events[event],
        _this = this;
    if (cur) {
        cur.forEach(function (item) {
            item.apply(_this, args);
        });
    }
};
Event.prototype.off = function (event, callback) {
    var cur = this.events[event];
    this.events[event] = cur.filter(function (item) {
        return callback != item;
    });
};
var event = new Event;