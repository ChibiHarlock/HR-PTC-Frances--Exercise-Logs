/*
*  Authored by Jarrett Kennedy 2016
*/

function print(name){
	console.log(name);
}

function forEach(collection, callback){
	collection.forEach(function(element, index){
		callback(element);
	});
}

function map(arr, projection){
	var results = [];
	forEach(arr, function(value){
      results.push(projection(value));
	});
	return results;
}

function filter(arr, test){
	var results = [];
	forEach(arr, function(value){
		if(test(value)){
			results.push(value);
		}
	});
	return results;
}

function concatAll(arr){
	var results = [];
	forEach(arr, function(subArray){
		map(subArray, function(item){
			results.push(item);
		});
	});
	return results;
}

function concatMap(arr, projection){
	return concatAll( 
		map(arr, function(item){
			return projection(item);
		})
	);
}

var boxarts = [
	{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
	{ width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

// 15. SKIPPED

// 16. implement reduce, returns a single value of a data type
function reduce(arr, accumulator, startValue){
	forEach(arr, function(item){
		if(startValue === undefined){
			startValue = item;
		}else{
			startValue = accumulator(startValue, item);
		}
	});
	return startValue;
}

var ratings = [2,3,1,4,5];
// 17. retrieve the largest rating using reduce
reduce(ratings, function(largestRating, curr){
	largestRating = (curr > largestRating) ? curr : largestRating;
	return largestRating;
});

// 18. Retrieve url of the largest boxart
reduce(boxarts, function(largeBoxart, currBoxArt){
	largeBoxart = ((currBoxArt.width * currBoxArt.height) 
				> (largeBoxart.width * largeBoxart.height)) 
				? currBoxArt : largeBoxart;
	return largeBoxart;
}).map(function(boxart){
	return boxart.url;
});

