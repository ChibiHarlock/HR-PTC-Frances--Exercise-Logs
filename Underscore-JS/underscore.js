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


