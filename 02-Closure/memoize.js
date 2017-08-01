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
