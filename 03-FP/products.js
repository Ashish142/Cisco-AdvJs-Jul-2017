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
	function sort(list, comparer){
		var comparerFn = function(){ return 0; };
		if (typeof comparer === 'string'){
			comparerFn = function(item1, item2){
				if (item1[comparer] < item2[comparer]) return -1;
				if (item1[comparer] > item2[comparer]) return 1;
				return 0
			}
		}
		if (typeof comparer === 'function')
			comparerFn = comparer;

		for(var i=0; i < list.length-1; i++)
			for(var j=i+1; j < list.length; j++)
				if (comparerFn(list[i], list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j]= temp;
				}
	}
	describe('By attributes', function(){
		function sortByAttribute(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j]= temp;
					}
		}
		describe('Products by id', function(){
			/*function sortProductsById(){
				for(var i=0; i < products.length-1; i++)
					for(var j=i+1; j < products.length; j++)
						if (products[i].id > products[j].id){
							var temp = products[i];
							products[i] = products[j];
							products[j]= temp;
						}
			}
			sortProductsById();*/
			//sortByAttribute(products, 'id');
			sort(products, 'id');
			console.table(products);
		});
		describe('Products by cost', function(){
			/*function sortProductByCost(){
				for(var i=0; i < products.length-1; i++)
					for(var j=i+1; j < products.length; j++)
						if (products[i].cost > products[j].cost){
							var temp = products[i];
							products[i] = products[j];
							products[j]= temp;
						}
			}
			sortProductByCost();*/
			//sortByAttribute(products, 'cost');
			sort(products, 'cost');
			console.table(products);
		});
	});

	describe('By comparer', function(){
		function sortByComparer(list, comparer){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparer(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j]= temp;
					}
		}
		describe('Products by value [cost * units]', function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0
			};
			//sortByComparer(products, productComparerByValue);
			sort(products, productComparerByValue);
			console.table(products);
		})
	})

});


describe('filter', function(){
	function filter(list, criteriaFn){
		var result = [];
		for(var index =0; index < list.length; index++)
			if (criteriaFn(list[index]))
				result.push(list[index]);
		return result;
	}

	function negate(criteriaFn){
		return function(){
			return !criteriaFn.apply(this, arguments);
		};
	}

	describe("filter by cost", function(){
		var costlyProductCriteria = function(product){
			return product.cost > 60;
		};
		/*var affordableProductCriteria = function(product){
			//return product.cost <= 60;
			return !costlyProductCriteria(product);
		};*/
		var affordableProductCriteria = negate(costlyProductCriteria);

		describe('costly products', function(){
			
			/*function filterCostlyProducts(){
				var costlyProducts  = [];
				for(var index=0; index < products.length; index++)
					if (products[index].cost > 60)
						costlyProducts.push(products[index]);
				return costlyProducts;
			}

			var costlyProducts = filterCostlyProducts();*/
			
			var costlyProducts = filter(products, costlyProductCriteria);
			console.table(costlyProducts);
		});

		describe('affordable products', function(){
			
			var affordableProducts = filter(products, costlyProductCriteria);
			console.table(affordableProducts);
		});

	});

	describe('filter by category', function(){
		var stationaryProductCriteria = function(product){
			return product.category === 'stationary';
		};
		/*
		var nonStationaryProductCriteria = function(product){
			return !stationaryProductCriteria(product);
		};
		*/
		var nonStationaryProductCriteria = negate(stationaryProductCriteria);

		describe('stationary products', function(){
			/*function filterStationaryProducts(){
				var stationaryProducts  = [];
				for(var index=0; index < products.length; index++)
					if (products[index].category === 'stationary')
						stationaryProducts.push(products[index]);
				return stationaryProducts;
			}
			var stationaryProducts = filterStationaryProducts();*/
			
			var stationaryProducts = filter(products, stationaryProductCriteria);
			console.table(stationaryProducts);
		});
		describe('Non stationary products', function(){
			var nonStationaryProducts = filter(products, nonStationaryProductCriteria);
			console.table(nonStationaryProducts);
		})
	});

});