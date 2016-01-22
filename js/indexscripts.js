
var output = function(input) {


  if(input.match(/^[a-zA-Z]+$/)) {
    return alert("Numbers only!");
  }

  var numberArray = [];


  for (var i = 1; i <= input; i++) {
    numberArray.push("<br>")
    numberArray.push(i);


    if (i % 15 === 0) {
      numberArray.pop();
      numberArray.push("<img src=img/ping.png>","<strong>PING-PONG!</strong>","<img src=img/pong.png>");
    }

    else if (i % 3 === 0) {
      numberArray.pop();
      numberArray.push("<img src=img/ping.png>","<strong>PING!</strong>");
    }

    else if (i % 5 === 0) {
      numberArray.pop();
      numberArray.push("<strong>PONG!</strong>","<img src=img/pong.png>");
    }
    console.log(numberArray);
  }
  numberArray = numberArray.join("")
  return numberArray;
  //
  // var outstring = numberArray.join("")
  //
  // return outstring;
};

$(document).ready(function(){

  $("form#numberInput").submit(function(event) {
    var input = $("input#number").val();
    var toPrint = output(input);

    $("#printTo").hide().append("<br>",toPrint,"<br><br><br>","<form><input class='btn btn-primary' type='button' onClick='history.go(0)' value='Try Again.'></form>").fadeIn(3000);
    $("#hide").hide();

    event.preventDefault();
  });



});
