var express = require ("express");
var app = express();
var generateE = require("./modules/generateEmployee");
var path = require("path");


var server = app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");
} );//end of app.listen

app.get('/', function (req, res) {
  console.log("getting is good");
  res.writeHead(200);
  res.write("It's ALIVE!");
  res.end();
});//end of base app.get

app.get('/index', function (req, res) {
  res.sendFile ( path.resolve("view/index.html"));
});

app.get('/pathGet', function (req, res) {

  res.write('received from generateEmployee');
  res.end();
  });//end of app.get / pathGet

app.get('/pathName', function (req, res) {

  res.write('received from generateName');
  res.end();
  });//end of app.get / pathName
