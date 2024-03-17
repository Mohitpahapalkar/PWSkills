const os=require('os');
const { json } = require('stream/consumers');
console.log("CPU Architecture",os.arch());//tells about OperatingSystem architecture
console.log("Free Memory",os.freemem());//gives free memory in bytes
console.log("Total Memory",os.totalmem());//gives total memory
console.log("Network Interfaces",JSON.stringify(os.networkInterfaces()));
console.log("OS default temp dir :",os.tmpdir());
console.log("Host Name :",os.hostname() );
console.log("OS type :",os.type());