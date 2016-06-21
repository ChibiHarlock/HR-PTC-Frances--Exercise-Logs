// reverse an array using reduce, Hack Reactor way

function each (collection, callback) {

  if (Array.isArray(collection)){
  
    for (var i = 0; i < collection.length; i++) {
    
      callback(collection[i], i, collection);
    
    }
  
  } else {
  
    for (var key in collection) {
    
      callback(collection[key], key, collection);
    
    }
  
  }

}

function reduce (arr, callback, accumulator) {

  each (arr, function(value){
  
    if (accumulator === undefined) {
    
      accumulator = value;
    
    } else {
    
      accumulator = callback(accumulator, value);
    
    }
  
  });
  
  return accumulator;
  
}

function reverse(array){

  return reduce(array, function(result, curr){
  
    result.unshift(curr);
    return result;
  
  }, []);

}

console.log(reverse([1,2,3,4,5,6])); // => [6,5,4,3,2,1]
