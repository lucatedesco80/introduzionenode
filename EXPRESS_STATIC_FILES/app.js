var express = require('express');
var app = express();
const path = require('path');

app.listen(3000, function () {
  console.lo('Example app listening on port 3000!');
});




app.get('/',funcion(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname+'/about.html'));
});
app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname+'/sitemap.html'));
});