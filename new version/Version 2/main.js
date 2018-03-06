var express = require('express');
var app = express();

//----------------------------------------------------------

var port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/"));// telling to the server to look for static files such as HTML CSS ... files in the public folder, with this we connected the server to the HTML file.
//----------------------------------------------------------

app.listen(port);
console.log("server is running on port 8080");
///////////////////////////


