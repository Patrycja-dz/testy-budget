const express = require('express');
const http = require("http");
const app = express();

const hostname = '127.0.0.1';
const port = 8000;
// const corsOptions = {
//     origin: 'http://localhost:3000/contact',
//     optionSuccessStatus: 200,
//     methids: "GET, POST, PUT"
// }

//node
const server = http.createServer((req,res)=>{
res.writeHead(200, {'Content-Type': 'application/json'})
res.end('Hello world')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
 })
 
//express 
// app.get('/', function (req,res){
//     res.send('hello world');
//     console.log("1 2 3 Helloo World")
// })

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// });