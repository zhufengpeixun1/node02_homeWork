var fs = require('fs');
fs.mkdir('a', function () {
    console.log('创建了a文件夹');
});
fs.mkdir('a/b', function () {
    console.log('创建了b文件夹');
});

fs.mkdir('a/b/c', function () {
    console.log('创建了c文件夹');
});
fs.mkdir('a/b/c/d', function () {
    console.log('创建了d文件夹');
});
