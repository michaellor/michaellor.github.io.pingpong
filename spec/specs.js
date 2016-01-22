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
