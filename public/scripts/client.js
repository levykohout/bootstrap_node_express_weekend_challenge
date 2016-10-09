$(function(){
var x='';
var y='';
var type='';


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

      $('#clear').on('click', function(){
        clearNumbers();
        console.log(data);
             $.ajax({
                  type: 'POST',
                  url: '/clear',
                  success: function(result){
                 $('#result').text(result);
               }


             }); //End of post ajax
      }); //end of click function

      function getNumber(){
          if (data.type == 'addition' || data.type == 'division' ||data.type == 'multiplication' ||data.type == 'subtraction'){
              var newButtonValue = $(this).attr('id');
              y += newButtonValue;
              data.y=y;
              console.log(y);
              $('#result').text(y);
          } else {
              var buttonValue = $(this).attr('id');
              x += buttonValue;
              data.x=x;
              console.log(x);
              $('#result').text(x);
          }
      }

      function getOperator(){
      type = $(this).attr('id');
      data.type=type;
    }

      function clearNumbers(){
        x='';
        y='';
        type=''; //clearing type resulting to switch statement on server to default
            data.x=x;
            data.y=y;
            data.type=type;
      }
});
