// each
/*
each([1, 2, 3], alert);
=> alerts each number in turn...
*/
function each (collection, iterator){

  // each should handle an array or object
  if(Array.isArray(collection)){
  
    for(var i = 0; i < collection.length; i++){
    
      iterator(collection[i], i, collection);  // access to the element, index, and list
    
    }
  
  } else {
  
    for(var key in collection){
    
      iterator(collection[key], key, collection);  // acces to the value, key, and object
    
    }
  
  }
}

// map with each
/*
map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]
*/
function map(arr,iterator){
  
  var result = [];
  
  each(arr, function(value){
    
    result.push(iterator(value));
    
  });
  
  return result;
}

// reduce with each
/*
var sum = reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
*/
function reduce(arr, iterator, accumulator){
  
  each(arr, function(value){
    
    if(accumulator === undefined){
      
      accumulator = value;
      
    } else {
      
      accumulator = iterator(accumulator, value);
      
    }
    
  });
  
  return accumulator;
  
}

// reduceRight with each
/*
var list = [[0, 1], [2, 3], [4, 5]];
var flat = reduceRight(list, function(a, b) { return a.concat(b); }, []);
=> [4, 5, 2, 3, 0, 1]
*/

// in reduceRight, accum is 
function reduceRight(arr, iterator, accumulator){
  each(arr, function(value){
    
    if(accumulator === undefined){
      
      accumulator = value;
      
    } else {
      // for reduceRight, the current value will be the first argument for the iterator
      // e.g. reduce([1,2,3], function(a,b){return a+b;}); => 6     accum is undefined, so 1 is accum         iterator(1, 2)
      // 1 + 2 = 3, iterator(3,3)  3+3 = 6
      
      // e.g. rightReduce([1],[2],[3]], function(a,b){return a.concat(b);},[]);  => [3,2,1]      accum is []
      // [] = iterator([1],[])
      // [1] = iterator([2],[1])
      // [2,1] = iterator([3],[2,1])
      // [3,2,1]
      accumulator = iterator(value, accumulator);
      
    }
    
  });
  
  return accumulator;
  
}

//find
/*
var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2
once a number passes the test, it returns that number and stops looking through the list
undefined if it returns no passing test 
*/

function find(arr,test){
  
  var result;
  
  each(arr, function(value){
    
    if(test(value) && result === undefined){
      
      result = value;
      
    }
    
  });
  
  return result;
  
}

// reject with reduce
/*
Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]
*/
function reject(arr, test){
  
  return reduce(arr, function(result, curr){
    
    if(!test(curr)){
      
      result.push(curr);
      
    }
    return  result;
    
  }, []);
  
}

// every
/*
every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false
*/
function every(arr, test){
  
  return reduce(arr, function(result,curr){
    
    if(!test(value)){
      
      result = false;
      
    }
    return result;
    
  },true);
  
}

/*
some with reduce

_.some([null, 0, 'yes', false]);
=> true
*/

function some(arr, test){
  
  return reduce(arr, function(result, curr){
    
    if(test(curr)){
      
      result = true;
      
    }
    return result;
    
  }, false);
  
}

/*
contains with reduce
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.

contains([1, 2, 3], 3);
=> true
*/
function contains (arr, target){
  
  return reduce(arr, function(isTruthy, curr){
  	
  	if(target === curr){
  		
  		isTruthy = true;
  	}
  	return isTruthy;
  	
  }, false);
  
}

/*
pluck 
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
*/
function pluck(collection, key){
  
 return map(collection, function(val){
   
   return val[key];
   
 });
  
}

/*
countBy
countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/
/*
countBy
countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/
function countBy(arr, test){
  return reduce(arr, function(obj, curr){
  	// returning a object
  	// the result of the test will be the key, and increment the result after every return
  	// visual steps
  	// first obj is {}
  	/*
  	then the first key is made from the result of the test on the 1st element
  	in our example, it's 'odd' and the value is itself or 0
  	we use || 0 to handle iterations and keep track of occurences
  	so now obj is {odd: 0}
  	increment the key to make it 1
  	return the obj
  	next, the curr is 2, so 2 is tested and it returns from the test 'even'
  	since even has not been a key yet, it's created.
  	obj = {odd: 1, even: 0};
  	increment the current key, even : 1
  	third, the curr is 3, so 3 is tested and returns 'odd'
  	odd already has been created so the keys are the same
  	increment the occurence to 2 for odd
  	obj = {odd: 2, even: 1}
  	repeat until you get obj = {odd: 3, even: 2}
  	
  	*/
  	obj[test(curr)] = obj[test(curr)] || 0;
  	obj[test(curr)]++;
  	return obj;
  	
  },{});
  
}
