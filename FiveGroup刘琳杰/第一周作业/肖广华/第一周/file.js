
var fs = require('fs');

//function mkDir(path) {
//    if (typeof (path) == "string") {
//        var path = path.replace(/\s+/g, "");
//        if (!path) {
//            console.log('此参数无效');
//            return;
//        }
//        var path = path.split("/");
//    }
//    for (var i = 0; i < path.length; i++) {
//        var str = path.slice(0, i + 1).join("/");
//        if (path[i]) {
//            if (!fs.existsSync(str)) {
//                fs.mkdirSync(str);
//            }
//        }
//    }
//}


//异步创建目录
function mkDir(path) {
    if (typeof (path) == 'string') {
        var path = path.replace(/\s+/g, "");
        if (!path) {
            console.log('此参数无效');
            return;
        }
        var path = path.split('/');
    }
    var index = 0;
    asyncCreateDir(index);
    function asyncCreateDir(index) {
        if (index == path.length) {
            return;
        }
        index++;
        var pathJoin = path.slice(0, index).join('/');
        fs.exists(pathJoin, function () {
            asyncCreateDir(index);
            return;
        });
        fs.mkdir(pathJoin, function () {
            asyncCreateDir(index);
        })
    }
}
mkDir('a/b/c/d');


