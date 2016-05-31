/**
 * Created by Administrator on 2016/5/27.
 */
var fs = require('fs');
var str = 'a/b/c/d';

//同步创建
function creatFileSync(str) {
    var ary = str.split('/'), ary1 = [];
    ary.forEach(
        function (item) {
            ary1.push(item);
            var str1 = ary1.join('/');
            if (!fs.existsSync(str1)){
                fs.mkdirSync(str1);
            }
        }
    )
}

//creatFileSync(str);


//异步创建
function creatFile(str) {
    var ary = str.split('/');
    var ary1 = [];
    function make(index) {
        if (!index) {
            index = 0;
        }
        if (index >= ary.length) {
            return;
        }
        ary1.push(ary[index]);
        var str1 = ary1.join('/');
        fs.exists(str1, function (flag) {
            if (!flag) {
                fs.mkdir(str1, function () {
                    make(index + 1);
                });
            }
        })
    }
    make();
}
//creatFile(str);




