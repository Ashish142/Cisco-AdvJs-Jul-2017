/*
Write a function that will check if the given number is a prime number or not
*/
//cache is public (as isPrime.cache)
function isPrime(n){
	if (!isPrime.cache)
		isPrime.cache = {};
	if (typeof isPrime.cache[n] !== 'undefined')
		return isPrime.cache[n];

	isPrime.cache[n] = true;
	console.log('processing ', n);
	if (n <= 3) return isPrime.cache[n];
	for(var index = 2; index <= (n/2); index++)
		if (n % index === 0){
			isPrime.cache[n] = false;
			break;
		}
	return isPrime.cache[n];
}

//cache is private
var isPrime = (function(){
	var cache = {};

	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];

		cache[n] = true;
		console.log('processing ', n);
		if (n <= 3) return cache[n];
		for(var index = 2; index <= (n/2); index++)
			if (n % index === 0){
				cache[n] = false;
				break;
			}
		return cache[n];
	}
	
})();

var isOddOrEven = (function(){
	var cache = {};

	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];

		
		console.log('processing ', n);
		cache[n] = n % 2 === 0 ? 'even' : 'odd';
		return cache[n];
	}
	
})();


function memoize(algoFn){
	var cache = {};

	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];

		cache[n] = algoFn(n);
		return cache[n];
	}
	
}

function memoize(algoFn){
	var cache = {};

	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== 'undefined')
			return cache[key];

		cache[key] = algoFn.apply(this,arguments);
		return cache[key];
	}
	
}

var cachedAdd = memoize(function(x,y){
	console.log('processing ', x , ' and ', y);
	return x + y;
})



