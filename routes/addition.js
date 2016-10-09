var express = require('express');
var router =express.Router();
var x = 0;
var y = 0;
var result =0;

router.post('/', function(req, res){ //router.post('/:name', function(req, res) { //name is a variable that accepts any info passed after '/'
 console.log(req.body);
x = parseFloat(req.body.x);
y = parseFloat(req.body.y);
var type = req.body.type;
result = 0;

switch (type) {
  case "addition":
    result = x + y;
    break;
  case "division":
    result = x / y;
    break;
  case "multiplication":
    result = x * y;
    break;
  case "subtraction":
    result = x - y;
    break;

  }
  console.log(result);


   res.send(result.toString());
});


module.exports = router;
