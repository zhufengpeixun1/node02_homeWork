/**
 * Created by tangsuan on 2016/5/27.
 */


//---------->  依次创建a,b,c,d(异步的,同步的)
var str = 'a/b/c/d';
mkdir(str);
function mkdir(str){
    var fs=require('fs'),reg=/([a-z]+)\/*/g,ary=[],ary2=[];
    str.replace(reg,function(){
        return ary.push(arguments[1]);
    });

    for(var i=0;i<ary.length;i++){
        ary2[i]=ary.slice(0,i+1).join('/');
    }
//同步写

//for(i=0;i<ary2.length;i++){
//    fs.mkdirSync(ary2[i]);
//}

//异步写
    var j=0;
    copy(j);
    function copy(j){
        if(j>=ary2.length){return}
        fs.mkdir(ary2[j],function(){
            j++;
            copy(j);
        });
    }
}

