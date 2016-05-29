/**
 * Created by Administrator on 2016/5/28.
 */
function Event(){
    this._events={}
}

Event.prototype.on= function (eventName, callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }
    else{
        this._events[eventName]=[callback];
    }
};

Event.prototype.once= function (eventName,callback) {
    function one(){
        callback.apply(this,arguments);
        this.off(eventName,one);
    }
    this.on(eventName,one)
};

Event.prototype.off= function (eventName, callback) {
    this._events[eventName]=this._events[eventName].filter(function (item) {
        return callback!=item;
    })
};

Event.prototype.Emit= function (eventName) {
    var args=Array.prototype.slice.call(arguments,1);
    var _this=this;
    this._events[eventName].forEach(function (item) {
        item.apply(_this,args);
    })
};


var event=new Event();
function fn(a){
    console.log(a+'你好');
}

//event.once('1',fn);
//event.on('1',fn);
//event.Emit('1','科比');
//event.Emit('1','科比');

var fs=require('fs');
var str='a/b/c/d';

function createFileSync(str){
    var array=str.split('/');var ary1=[];
    array.forEach(
        function(item){
            ary1.push(item);
            var str1=ary1.join('/');
            if(!fs.existsSync(str1)){
               fs.mkdirSync(str1);
            }
        }
    )
}
//createFileSync(str);

function createFile(str){
    var ary=str.split('/');var ary1=[];
    function make(index){
        if(!index){
             index=0;
        }
        if(index>=ary.length){
            return;
        }
        ary1.push(ary[index]);
        var str1=ary1.join('/');
        fs.exists(str1, function (flag) {
            if(!flag){
                fs.mkdir(str1, function () {
                    make(index+1)
                });
            }
        })
    }
    make();
}

//createFile(str);




