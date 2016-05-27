/**
 * Created by qiaoshi on 2016/5/27.
 */
var fs=require('fs');
/*链式同步创建文件夹
 * mkSync([String])
 *    [String]:a/b/c/d
 * */
var mkSync=function(str){
    var reg=/(\w+)(\/)*/g;
    var str1='';
    var index=0;
    str.replace(reg,function(){
        index++;
        if(index==1){
            fs.mkdirSync(arguments[1]);
            str1+=arguments[0]
        }else{
            str1+=arguments[1];
            fs.mkdirSync(str1);
            str1+=arguments[2];
        }
    })
};
mkSync('a/v/e/t/q/t');
/*链式异步创建文件夹
* mk([String])
*    [String]:a/b/c/d
* */
var mk=function(str){
    var index=true;
    var str1='';
    var reg=/(\w+)(\/)*/g;
    var res=reg.exec(str);
    function fn(){
        if(res)
        if(index){
            index=false;
            fs.mkdir(res[1], fn);
            str1+=res[0];
        }else{
            str1+=res[1];
            fs.mkdir(str1,fn);
            str1+=res[2];
        }
        res=reg.exec(str);
    }
    fn();
};
mk('a/b/c/d/s');