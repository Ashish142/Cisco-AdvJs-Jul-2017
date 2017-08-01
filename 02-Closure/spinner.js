//Revealing Module Pattern
var spinner = (function(){
	var counter = 0;

	function increment(){
		return ++counter;
	}

	function decrement(){
		return --counter;
	}

	return {
		up : increment,
		down : decrement
	}
})()


function spinnerFactory(){
	var counter = 0;

	function increment(){
		return ++counter;
	}

	function decrement(){
		return --counter;
	}

	return {
		up : increment,
		down : decrement
	}
}

var spinner1 = spinnerFactory()
var spinner2 = spinnerFactory()


