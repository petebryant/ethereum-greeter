	window.onload = function() {
    var accounts = web3.eth.accounts;
	  var deployed = greeter.deployed();

	$("#contAddress").html(deployed.address);

    var myGreeterInstance;
    greeter.new({from: accounts[0], gas: 3141592}).then(
      function(greet) {
        myGreeterInstance = greet;
    });

    function talk(phrase) {
		  myGreeterInstance.phrase(phrase, { from: accounts[0], value: 0 });
       return myGreeterInstance.greet().then(function(words){
         $("#status").html(words);
       });
    };

    $("#saySomething").click(function() {
		  var phrase = $("#greeting").val();
		  talk(phrase);
	  });
  };