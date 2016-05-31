var fs = require('fs');
var mkdirs = function(path, callback){
    var dirs = path.slice(0).split("/");
    console.log(dirs);
    var i = 0;

    var mk = function(err){
        i += 1;
        if(i > dirs.length){
            callback(err);
            return;
        }
        fs.mkdir(dirs.slice(0, i).join('/'), function(err){
            mk(err);
        });
    };

    mk();
};

mkdirs('test/test2/text3/text4/test5/test99', function(err){
    console.log(err);
});

