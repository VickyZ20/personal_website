const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

//middlewares
app.use(express.json());
app.use(express.static("express"));

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));

});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log('Listening on port ' + port);

//credit to https://medium.com/javascript-in-plain-english/create-a-single-page-website-using-node-js-and-express-js-a0b53e396e4f
