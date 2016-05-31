/**
 * Created by RoyYu on 2016/5/28
 */
var fs = require("fs");
str = "a/b/c";

// 第一种

//function makeSync(str){
//    if(str){
//        var oldAry=str.split("/"),newAry=[];
//        oldAry.map(function(item){
//            newAry.push(item);
//            if(newAry.length==0){
//                return console.log("转换字符串错误！")
//            }else{
//                strNew=newAry.join("/");
//                fs.mkdirSync(strNew);
//            }
//        })
//    }else{
//        return console.log("参数不合法！")
//    }
//    console.log("创建文件夹  "+str+"   完成!")
//}
//
//makeSync(str);




//第二种

//function make(str) {
//    var oldAry = str.split("/"), newAry = [],start=0;
//    call(start);
//    function call(t){
//        newAry.push(oldAry[t]);
//        var strNew1=null;
//        if(t==0){
//             strNew1 = newAry.join();
//        }else if(t<=oldAry.length){
//             strNew1 = newAry.join("/");
//        }else return;
//
//        fs.mkdir(strNew1,function(){
//            call(t+1);
//        })
//    }
//}
//
//make(str);