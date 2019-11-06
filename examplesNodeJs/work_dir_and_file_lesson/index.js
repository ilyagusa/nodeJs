var fs = require('fs');

fs.unlink('./newDir/text_new.txt', function(){}); //delete file

fs.rmdir('newDir', function(){
  
});



//fs.mkdir('newDir', function(){
//  fs.writeFile('./newDir/text_new.txt', 'test', function(){
//    console.log("Work");
//  })
//});
