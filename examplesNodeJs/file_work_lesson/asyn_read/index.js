var fs = require('fs');

fs.readFile('text.txt', 'utf8', function(err, data){
  console.log(data);
});

fs.writeFile('write_text.txt', "Test write text", function(err, data){
});

console.log("test");
