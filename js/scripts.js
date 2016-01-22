var userInput = function(number) {
  if (number === "a") {
      return false;
  } else {
    return true;
  }
  console.log(number);

}

var pingNumber = function(number1) {
  if (number1 % 3 === 0) {
    return "ping";
  } else {
    return false;
  }
};

var pongNumber = function(number2) {
  if (number2 % 5 === 0) {
    return "pong";
  } else {
    return false;
  }
};

var pingPongNumber = function(number3) {
  if (number3 % 15 === 0) {
    return "pingpong";
  } else {
    return false;
  }
};

var pingPongInput = function(number) {
  if (number % 15 === 0) {
    return "pingpong";
  } else if (number % 3 === 0) {
    return "ping";
  } else if (number % 5 === 0) {
    return "pong";
  }
};

var inputArray = function(input) {

  var numberArray = [];

  for (var i = 1; i <= input; i++) {
    numberArray.push(i);
  }
  return numberArray;
};



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
