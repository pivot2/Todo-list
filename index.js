var express = require('express');
let port=process.env.PORT||3000;
var app=express();
app.use(express.static(__dirname + "/public"));
app.get('/',(req,res)=>
  {
    res.redirect('/home.html');
  });
var server = app.listen(port, function() {
    console.log('listening for requests on port 3000');
  });
