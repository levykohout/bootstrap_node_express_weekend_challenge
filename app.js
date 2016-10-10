var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var mathRouter = require('./routes/math');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', mathRouter);

app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});
app.use(express.static('public'));
app.listen(3000);
