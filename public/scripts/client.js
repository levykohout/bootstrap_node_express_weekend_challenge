$(function(){
var x=0;
var y=0;


$('.numbers').on('click', getNumber);
$('.operators').on('click', getOperator);

console.log(data);

   var data ={x: 0, y:0, type:'' };
  $('#equal').on('click', function(){
    console.log(data);
         $.ajax({
              type: 'POST',
              url: '/' + data.type,
              data: data,
              success: function(result){
             $('#result').text(result);
           }


           }); //End of post ajax
      }); //End of click function

      function getNumber(){
          if (data.type == 'addition' || data.type == 'division' ||data.type == 'multiplication' ||data.type == 'subtraction'){
              var newButtonValue = $(this).attr('id');
              y += newButtonValue;
              data.y=y;
              console.log(y);
          } else {
              var buttonValue = $(this).attr('id');
              x += buttonValue;
              data.x=x;
              console.log(x);
          }
      }

      function getOperator(){
      var type = $(this).attr('id');
      data.type=type;
    }
});
