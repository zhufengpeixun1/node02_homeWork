/**
 * Created by Administrator on 2016/5/27.
 */
var buffer1=new Buffer('宋闵浩');
var buffer2=new Buffer('权志龙');

Buffer.concat1= function (list, len) {
    if(list.length==1){
        return list[0];
    }
    if(!len){
        len=0;
        for(var i= 0;i<list.length;i++){
            len+=list[i].length;
        }
    }
    var curLen=0;
    var newBuffer=new Buffer(len);
    for(i=0;i<list.length;i++){
        var cur=list[i];
        cur.copy(newBuffer,curLen);
        curLen+=cur.length;
    }
    return newBuffer.slice(0,len);
};

console.log(Buffer.concat1([buffer1,buffer2]).toString());
