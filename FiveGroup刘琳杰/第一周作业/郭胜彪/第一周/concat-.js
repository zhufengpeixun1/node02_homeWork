/**
 * Created by tangsuan on 2016/5/27.
 */

var buffer1=new Buffer('姐姐');
var buffer2=new Buffer('妹妹');
Buffer.concat1=function(list,len){
    if(list.length==1){
        return list[0];
    }
    if(typeof len=='undefined'){
        len=0;
        for(var i=0;i<list.length;i++){
            len+=list[i].length;
        }
    }
    var buffer=new Buffer(len);
    var index=0;
    for(i=0;i<list.length;i++){
        var cur=list[i];
        cur.copy(buffer,index);
        index+=cur.length;
    }

    return buffer.slice(0,index);
};
console.log(Buffer.concat1([buffer1,buffer2],80).toString());



