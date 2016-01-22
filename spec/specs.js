describe('userInput', function() {
  it("is false for an input that is not a number.", function(){
  expect(userInput("a")).to.equal(false);
  });
});

describe('pingNumber', function() {
  it("numbers divisible by 3 should be 'ping'.", function(){
    expect(pingNumber(3)).to.equal("ping");
  });
});

describe('pongNumber', function() {
  it("numbers divisible by 5 should be 'pong'.", function(){
    expect(pongNumber(5)).to.equal("pong");
  });
});

describe('pingPongNumber', function() {
  it("numbers divisible by 15 should be 'pong'.", function(){
    expect(pingPongNumber(15)).to.equal("pingpong");
  });
});

describe('pingPongInput', function() {
  it("numbers divisible by 3 should be 'ping', 5 should be 'pong', and 15 should be 'pingpong'.", function(){
    expect(pingPongInput(3)).to.equal("ping");
  });
});

describe('inputArray', function() {
  it("input number should generate an array with a number range from 1 to the input number.", function(){
    expect(inputArray(4)).to.equal("[1,2,3,4]");
  });
});
