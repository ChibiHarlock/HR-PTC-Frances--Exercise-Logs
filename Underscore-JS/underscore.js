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
