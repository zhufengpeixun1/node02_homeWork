//引入 fs包
var fs = require('fs');
/**
 * 同步创建目录
 * 支持 参数为数组和字符串
 *
 * @param String path  目录路径
 */
function mkDir(path) {
    if (typeof (path) == "string") {
        var path = path.replace(/\s+/g, "");
        if (!path) {
            console.log('此参数无效');
            return;
        }
        var path = path.split("/");//把字符串分割成数组  这里用/ 分割的

    }
    for (var i = 0; i < path.length; i++) {
        var str = path.slice(0, i + 1).join("/");
        //console.log(str);
        if (path[i]) {
            if (!fs.existsSync(str)) {
                fs.mkdirSync(str);
            }
        }
    }
}

/**
 * 异步创建目录
 * 支持 参数为数组和字符串
 *
 * @param String path  目录路径
 */
//function mkDir(path) {
//    if (typeof (path) == 'string') {
//        var path = path.replace(/\s+/g, "");
//        if (!path) {
//            console.log('此参数无效');
//            return;
//        }
//        var path = path.split('/');
//    }
//    var index = 0;
//    asyncCreateDir(index);
//    function asyncCreateDir(index) {
//        if (index == path.length) {
//            return;
//        }
//        index++;
//        var pathJoin = path.slice(0, index).join('/');
//        fs.exists(pathJoin, function () {
//            asyncCreateDir(index);
//            return;
//        });
//        fs.mkdir(pathJoin, function () {
//            asyncCreateDir(index);
//        })
//    }
//}

//调用函数
//mkDir('a/b/c/d');
mkDir([1, 2, , 4]);
