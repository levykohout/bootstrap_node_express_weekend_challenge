var express = require('express');
var router =express.Router();


router.post('/', function(req, res){ //router.post('/:name', function(req, res) { //name is a variable that accepts any info passed after '/'
 console.log(req.body);
var x = parseInt(req.body.x);
var y = parseInt(req.body.y);
var type = req.body.type;
var result = 0;

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
                               //members[req.params.name]++;

   res.send(result.toString());
});







module.exports = router;
