var products = [
	{id : 5, name : 'Pen', cost : 60, units : 10, category : 'stationary'},
	{id : 8, name : 'Pencil', cost : 40, units : 50, category : 'stationary'},
	{id : 6, name : 'Len', cost : 70, units : 30, category : 'grocery'},
	{id : 9, name : 'Den', cost : 80, units : 70, category : 'stationary'},
	{id : 4, name : 'Ten', cost : 50, units : 60, category : 'grocery'},
]

/*
Sort
Filter
GroupBy
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});



describe('Sort', function(){
	describe('By attributes', function(){
		/*function sortByAttribute(){
			
		}*/
		describe('Products by id', function(){
			function sortProductsById(){

			}
			sortProductsById();
			console.table(products);
		});
		describe('Products by cost', function(){
			function sortProductByCost(){

			}
			sortProductByCost();
			console.table(products);
		});
	})
});

/*function filter(){

}
describe('filter', function(){
	describe('costly products', function(){
		filter()
		console.table(products);
	});
});*/