// HR functions
// sum of positives using reduce

function each (collection, callback){
	
	if (Array.isArray(collection)){
		
		
		for (var i = 0; i < collection.length; i++){
			
			callback(collection[i], i, collection);
			
		}
		
	} else {
		
		
		for (var key in collection){
			
			
			callback(collection[key], key, collection);
			
			
		}
		
		
	}
	
	
}

function reduce (array, callback, accumulator){
	
	each (array, function(value){
		
		if (accumulator === undefined){
			
			accumulator = value;
			
			
		} else {
			
			accumulator = callback(accumulator, value);
			
			
		}
		
	});
	
	return accumulator;
	
	
}


// sumPositives
function sumPositives (array){
	
	return reduce (array, function(sum, curr){
		
		// add all positive numbers only
		if (curr > 0){
			
			sum += curr;
			
		}
		
		return sum;
		
	}, 0);
	
}

console.log(sumPositives([1,-2,5,-4,-9,10])); // => 16


// filter with reduce
function filter (array, test){
	
	return reduce (array, function(result, curr){
		
		if (test(curr)){
			
			result.push(curr);
			
		}
		return result;
		
	}, []);
	
}

console.log(filter([1,2,1,-4,-7,9,15], function(num){
	
	
	return num % 3 === 0;
	
})); // => [9,15]


// map with reduce
function map (array, callback){
	
	return reduce(array, function(result, curr){
		
		result.push(callback(curr));
		return result;
		
	}, []);
	
}

console.log(map([1,3,7,15], function(num){
	
	return num * num;
	
})); // => [1,9,49,225]

// some function with reduce
// e.g. return true if some of the values pass a test
// without coding, we know that it will return false always
function some (array, test){
	
	return reduce(array,function(isTruthy, curr){
		
		
		if (test(curr)){
			
			isTruthy = true;
			
		}
		return isTruthy;
		
	}, false);	
	
}

console.log(some([1,2,3,4,5,6,24], function(num){
	
	return num % 2 === 0;
	
})); // => true

// reject function with reduce
// reject any values that do not pass a test and push them to a new array
function reject(array, test){
	
	return reduce(array, function(result, curr){
		
		if(!test(curr)){
			
			result.push(curr);
			
		}
		return result;
		
	}, []);
	
}

console.log(reject([1,'3',4,'t','1',4,5], function(val){
	if(typeof val == "string"){
		return val;
	}
	
})); // => [1,4,4,5]

// every function with reduce
// every returns true if all values passes a test
function every (array, test){
	
	return reduce (array, function(isTruthy, curr){
		
		if(!test(curr)){
			
			isTruthy = false;
		}
		return isTruthy;
		
	}, true);
	
}

console.log(every([1,2,3,4], function(num){
	
	return num %2 !== 0;
	
}));

