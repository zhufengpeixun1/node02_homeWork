
var fs=require("fs");
function mkDirSync(path){
    if(typeof path!="string"){
        throw new TypeError('"path" must be a string');
    }
    var strAry=path.split("/");
    strAry.forEach(function(item,index){
        var str=strAry.slice(0,index+1).join("/");
        if(fs.existsSync('./'+str)){
            return;
        }
        fs.mkdirSync(str);
    })
}
mkDirSync("a/b/c/d");