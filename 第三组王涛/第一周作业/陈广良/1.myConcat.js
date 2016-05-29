//写一个Buffer的concat方法
function myConcat(list, len) {
    if (list.length == 1) {
        return list[0];
    }
    if (len == "undefined") {
        len = 0;
        for (var i = 0; i < list.length; i++) {
            len += list[i].length;
        }
    }
    var newBuf = new Buffer(len);
    var index = 0;
    for (var j = 0; j < list.length; j++) {
        var curBuf = list[j];
        curBuf.copy(newBuf, index);
        index += curBuf.length;
    }
    return newBuf.slice(0,index);
}


var buf1 = new Buffer("珠峰");
var buf2 = new Buffer("培训");
console.log(myConcat([buf1, buf2], 100).toString());



















