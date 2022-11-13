var express = require('express');
const http = require('http')
const path = require('path');
const fs = require('fs')
const port = 3000
const app = express();

app.use('/static', express.static('public'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index3.html'));
})
   
app.listen(8080);