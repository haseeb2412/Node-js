
 // Event Emitter---------------------------------
const eventEmitter = require("events");
const event = new eventEmitter();


//define the event 
event.on("myname",(name ,profession,id)=>{
    console.log(`my name is ${name} and my profession is ${profession} and is is ${id}`);
})


//fire the event 
// event.emit("myname","haseeb","software engineer","123231");


// creating http server

const http =require('http')

const server =http.createServer((res,req)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
})


server.on('request',(req,res)=>{
    console.log("request receive");
})

server.on('listening',(req,res)=>{
    console.log("server is listening on port 3000");
})

server.listen(3000);