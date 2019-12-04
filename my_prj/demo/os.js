const os = require('os')

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem()/(8*1024));
console.log(os.uptime());
