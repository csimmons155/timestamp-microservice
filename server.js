var express = require("express");
//in c9 always use port: 8080
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var api = require('./app/api/timestamp.js');
var route = require('./app/route/index.js');

app.use(function(req, res, next){
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//parses the url 
app.use(bodyParser.urlencoded({extended : true}));
//parses the data into JSON 
app.use(bodyParser.json());
//post html page 
//app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080; 


route(app);
api(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});





app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
