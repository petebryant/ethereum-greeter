contract('Greeter', function(accounts) {
  it("should be true", function(done) {
    var greet = greeter.deployed();
    assert.isTrue(true);
    done();
  });
    it("Greetings should match", function(done){
    var greet = greeter.deployed();
    greet.phrase("hello", {from: accounts[1], value: 0})
    return greet.greet().then(function(words){
      assert.equal(words, "hello", "Message doesn't match!");
    }).then(done).catch(done);  
  });
});
