const os = require("os")

// getting information about the operating system
console.log("Platform:",os.platform());
console.log("CPU Architecture:",os.arch());
console.log("Total Memory:",os.totalmem());
console.log("Total Memory:",(os.totalmem()/1024/1024/1024).toFixed(2),"GB");


//getting user information

console.log("UserInfo:",os.userInfo());
console.log("UserName:",os.hostname());
console.log("Home DIrectory:",os.homedir());

//getting sytem uptime 

console.log("System uptime (seconds):",os.uptime());

// Convert uptime to a more readable format
const uptime = os.uptime();
const days = Math.floor(uptime / (3600 * 24));
const hours = Math.floor((uptime % (3600 * 24)) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);
const seconds = Math.floor(uptime % 60);
console.log('System Uptime:', `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);


// Get information about network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);
