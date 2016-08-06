import "mortal.sol";

contract greeter is mortal {
	string greeting;

	function phrase(string _greeting) public {
		greeting = _greeting;
	}

	function greet() constant returns (string){
		return greeting;
	}
}

