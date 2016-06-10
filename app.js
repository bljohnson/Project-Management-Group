var express = require ("express");
var app = express();
<<<<<<< HEAD
var generateE = require("./modules/generateEmployee.js");
=======
var generateE = require("./modules/generateEmployee");
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
var path = require("path");

app.use(express.static('public')); // allow use of public files

var server = app.listen(process.env.PORT || 3000, function () {
<<<<<<< HEAD
  console.log("listening on port");
=======
  console.log("listening on port 3000");
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
} );//end of app.listen

app.get('/', function (req, res) {
  console.log("getting is good");
  res.writeHead(200);
  res.write("It's ALIVE!");
  res.end();
});//end of base app.get

app.get('/index', function (req, res) {
  //console.log(path.resolve("view/index.html"));
  res.sendFile (path.resolve("public/view/index.html")); // added public/ in front of view - YAYYYYYYYY

});

app.get('/pathGet', function (req, res) {

  res.write( generateE() );
  res.end();
  });//end of app.get / pathGet

// app.get('/pathName', function (req, res) {
//
//   res.write(generateName());
//   res.end();
//   });//end of app.get / pathName
