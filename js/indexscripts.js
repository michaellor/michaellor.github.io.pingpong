
var testArray = function(input) {

  var numberArray = [];

  for (var i = 1; i <= input; i++) {
    numberArray.push(i);


    if (i % 15 === 0) {
      numberArray.pop();
      numberArray.push("pingpong");
    }

    else if (i % 3 === 0) {
      numberArray.pop();
      numberArray.push("ping");
    }

    else if (i % 5 === 0) {
      numberArray.pop();
      numberArray.push("pong");
    }
    console.log(numberArray);
  }

  return numberArray;
};

$(document).ready(function(){

  $("form#replaceVowel").submit(function(event) {
    var string = $("input#string").val();
    var toPrint = splitString(string);

    $("#printTo").append("<br><hr>",toPrint,"<br><hr><strong>Good Luck!</strong>");
    $("#hide").hide();

  event.preventDefault();
  });

});
