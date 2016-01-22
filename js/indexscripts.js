
var output = function(input) {



  var numberArray = [];


  for (var i = 1; i <= input; i++) {
    numberArray.push("<li>")
    numberArray.push(i);


    if (i % 15 === 0) {
      numberArray.pop();
      numberArray.push("<img src=img/ping.png>","pingpong","<img src=img/pong.png>");
    }

    else if (i % 3 === 0) {
      numberArray.pop();
      numberArray.push("<img src=img/ping.png>","ping");
    }

    else if (i % 5 === 0) {
      numberArray.pop();
      numberArray.push("pong","<img src=img/pong.png>");
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

    $("#printTo").append("<br><hr>",toPrint,"<br><hr><strong>Good Luck!</strong>");
    $("#hide").hide();

  event.preventDefault();
  });

});
