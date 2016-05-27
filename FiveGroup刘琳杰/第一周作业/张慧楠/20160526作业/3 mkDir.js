
var fs=require("fs");
function mkDir(path){
    if(typeof path!="string"){
        throw new TypeError('"path" must be a string');
    }
    var strAry=path.split("/");
    make(0);
    function make(index){
        if(index==strAry.length){
            return;
        }
        var str=strAry.slice(0,index+1).join("/");
        index++;
        fs.exists('./'+str,function(flag){
            if(flag){
                make(index);
                return;
            }
            fs.mkdir(str,function(){
                make(index);
            });
        });
    }
}
mkDir("a/b/c/d");