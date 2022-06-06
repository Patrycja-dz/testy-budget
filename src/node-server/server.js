const express = require('express')
const app = express();

const hostname = '127.0.0.1';
const port = 8000;
// const corsOptions = {
//     origin: 'http://localhost:3000/contact',
//     optionSuccessStatus: 200,
//     methids: "GET, POST, PUT"
// }
app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});