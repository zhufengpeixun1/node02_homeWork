/**
 * Created by Roy Yu on 2016/5/27.
 */
var buffer1=new Buffer("第一周");
var buffer2=new Buffer("作业");


Buffer.newConcat=function(list,len){
    //只传递一个值并且这个值是一位
    if(list.length==1){
        return list[0];
    }
    //没有传递长度的话，从新的计算buffer的长度，并设置长度为计算之后的长度；
    if(typeof len =="undefined"){
        len = 0;
        for(var i = 0; i<list.length;i++){
            len += list[i].length;
        }
    }
    var newBuffer = new Buffer(len);

    //超过两项的时候进行下面的代码利用buffer的copy的方法进行拼接
    var index = 0;
    for( i =0; i<list.length;i++){
        var curList = list[i];
        curList.copy(newBuffer,index);
        index += curList.length;
    }
    //返回一个新的数组
    return newBuffer.slice(0,index);
};


