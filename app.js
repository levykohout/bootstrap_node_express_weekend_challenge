var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var additionRouter = require('./routes/addition');
var divisionRouter = require('./routes/division');
var multiplicationRouter = require('./routes/multiplication');
var subtractionRouter = require('./routes/subtraction');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/addition', additionRouter);
app.use('/division', divisionRouter);
app.use('/multiplication', multiplicationRouter);
app.use('/subtraction', subtractionRouter);
app.use('/clear', additionRouter);


app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});
app.use(express.static('public'));
app.listen(3000);
