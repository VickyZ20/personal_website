const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

//middlewares
app.use(express.json());
app.use(express.static("express"));

app.use('/', function(req,res){
    res.sendFile(path.join('personal_website/express/index.html'));

});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log('Listening on port ' + port);