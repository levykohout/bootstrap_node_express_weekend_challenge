var express = require('express');
var router =express.Router();


router.post('/:name', function(req, res){ //router.post('/:name', function(req, res) { //name is a variable that accepts any info passed after '/'
 console.log(req.body);
 var x = parseFloat(req.body.x);
 var y = parseFloat(req.body.y);
 var type = req.body.type;

 switch (type) {

  case 'addition':
    result = x + y;
    break;

  case 'division':
    result = x / y;
    break;

  case 'multiplication':
    result = x * y;
    break;

  case 'subtraction':
    result = x - y;
    break;

  default:
  res.sendStatus(400);

}



console.log(result);

res.send(result.toString());

});


module.exports = router;
