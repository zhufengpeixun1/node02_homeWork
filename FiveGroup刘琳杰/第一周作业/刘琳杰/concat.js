Buffer.concat1 = function (arrylist, len) {
    if (arrylist.length == 1) {
        return arrylist[0];
    }
    if (typeof len == 'undefined') {
        len = 0;
        for (var i = 0; i < arrylist.length; i++) {
            len += arrylist[i].length;
        }
    }
    var newBuffer = new Buffer(len);
    var index = 0;
    for (i = 0; i < arrylist.length; i++) {
        var cur = arrylist[i];
        cur.copy(newBuffer, index);
        index += cur.length;
    }
    return newBuffer.slice(0, index);
};
var buf = new Buffer('测试');
var buf2 = new Buffer('测试1');
console.log(Buffer.concat1([buf, buf2], 100).toString());