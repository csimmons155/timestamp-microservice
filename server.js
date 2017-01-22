var express = require("express");
//in c9 always use port: 8080
var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
