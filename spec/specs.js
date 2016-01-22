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
    expect(inputArray(3)).to.eql([1,2,3,]);
  });
});

describe('testArray', function() {
  it("replace the number 3 with 'ping' in an array.", function(){
    expect(testArray(16)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong',16]);
  });
});
