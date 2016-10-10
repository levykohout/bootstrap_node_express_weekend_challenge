$(function(){
var x='';
var y='';
var type='';
var data ={x: 0, y:0, type:'' };

//Button event listeners
$('.numbers').on('click', getNumber);
$('.operators').on('click', getOperator);
$('.decimal').on('click', decimalClicked);
$('#equal').on('click', equalFunction);
$('#clear').on('click', clearButton);
console.log(data);



function equalFunction (){
  if (data.type != '') { // no post request if no operator selected
    console.log(data);
         $.ajax({
              type: 'POST',
              url: '/math/' + data.type,
              data: data,
              success: function(result){
              $('#result').text(result);
            //resets after displaying result
              clearNumbers();
           }


           }); //End of post ajax
    }//End of condition
} //End of equalFunction

function clearButton (){
    clearNumbers();
    $('#result').text('0');
} //end of clearButton function

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
       //enable decimal button back until clicked again
    $('button').prop('disabled', false);

    type = $(this).attr('id');
    data.type=type;

    //if operator buttons were clicked without x values set previous result as x
    if(x==''){
         x=$('#result').text();
         data.x=x;
         console.log(x);
    }

  }

function clearNumbers(){
  x='';
  y='';
  type='';
  //clearing type resulting to switch statement on server to default
   data.x=x;
   data.y=y;
   data.type=type;
  }

function decimalClicked() {
  //when decimal button clicked once, disable it
  $('.decimal').prop('disabled', true);
  }

});
