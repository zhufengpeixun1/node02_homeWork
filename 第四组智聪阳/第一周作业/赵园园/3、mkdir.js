var fs = require('fs');
function mkdir(path) {
    path += '/';
    var arr = path.split('/');
    for (var i = 0; i < arr.length; i++) {
        i = fs.exists(arr[i]) ? i + 1 : i;
        fs.mkdir(arr.slice(0, i).join('/'), function (err) {
            console.log(err);
        });
    }
}
mkdir('a/b/c/d/e/f');