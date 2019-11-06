var fs = require('fs');

var file_read_text = fs.readFileSync('text.txt', 'utf8');
console.log(file_read_text);
var mess = "Hello world\n" + file_read_text
fs.writeFileSync('write_text.txt', mess);
