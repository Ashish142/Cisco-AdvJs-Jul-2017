/*
Write a function that will check if the given number is a prime number or not
*/

//cache is private
var isPrime = (function(){
	var cache = {};

	function isPrime(n){
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
	return isPrime;
})();

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