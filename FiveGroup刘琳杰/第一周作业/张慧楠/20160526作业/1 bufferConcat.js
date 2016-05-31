var buff1=new Buffer("世界");
var buff2=new Buffer("你好");
function bufferConcat(list,len){
    if(list.length===1){
        return list[0];
    }
    if(!len){
        len=0;
        for(var i=0;i<list.length;i++){
            len+=list[i].length;
        }
    }
    var len1= 0;
    var newBuffer=new Buffer(len);
    for(i=0;i<list.length;i++){
        var cur=list[i];
        cur.copy(newBuffer,len1);
        len1+=cur.length;
    }
    return newBuffer.slice(0,len1);
}
console.log(bufferConcat([buff1,buff2]).toString());