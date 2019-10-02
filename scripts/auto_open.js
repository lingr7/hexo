   	var exec = require('child_process').exec;
    hexo.on('new', function(data){
    exec('start  "C:\Program Files\Typora\Typora.exe" ' + data.path);
    }); 
