//- 写一个事件的系统 绑定 移除 执行 绑定一次
function Event() {
}
Event.prototype.on = function (evenType, eventFn) {

    if (!this.evenType) {
        this.evenType = [eventFn];
    }
    this.evenType.push(eventFn);
};
Event.prototype.off = function (evenType, eventFn) {
    if (this.evenType) {
        var ary = this.evenType;
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] == eventFn) {
                ary.splice(i, 1);
                return;
            }
        }
    }
};
Event.prototype.run = function (evenType) {
    var arg = Array.prototype.slice.call(arguments, 1);
    if (this.evenType) {
        var ary = this.evenType;
        for (var i = 0; i < ary.length; i++) {
            var cur=ary[i];
            cur.apply(this,arg);//一定要把当前要执行的函数里的this设置为当前对象event，
        }
    }
};
Event.prototype.once = function (evenType, eventFn) {
//给某个类型上的绑定某个方法让其在后面的run时只执行一次
    function one(){
        eventFn.apply(this,arguments);
        this.off(evenType,one);
    }
    this.on(evenType,one);
};


function f1(who) {
    console.log(who+"f1");
}
function f2(who) {
    console.log(who+"f2");
}
var event = new Event();

event.once('click',f1);
event.run('click',"珠峰");
event.run('click',"珠峰");















