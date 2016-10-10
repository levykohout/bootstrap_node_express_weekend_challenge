var express = require('express');
var router =express.Router();


router.post('/', function(req, res){ //router.post('/:name', function(req, res) { //name is a variable that accepts any info passed after '/'
console.log(req.body);
x = parseFloat(req.body.x);
y = parseFloat(req.body.y);
type = req.body.type;

result = x + y;

console.log(result);

res.send(result.toString());

});


module.exports = router;
