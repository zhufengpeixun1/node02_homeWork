Buffer.concat = function (list, len) {
    if (list.length == 1) {
        return list[0];
    }
    if (typeof len === 'undefined') {
        len = null;
        for (var i = 0; i < list.length; i++) {
            len += list[i].length;
        }
    }
    var buffer = new Buffer(len), index = null;
    for (i = 0; i < list.length; i++) {
        var cur = list[i];
        cur.copy(buffer, index);
        index += cur.length;
    }
    return buffer.slice(0, index);
};