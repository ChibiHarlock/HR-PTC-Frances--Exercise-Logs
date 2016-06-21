/*
Write a function that flattens an Array of Array objects into a flat Array. 
Your function must only do one level of flattening.

var array = {[1,2,3],[4,5,6],[7,8,9]}
flatten(array); => [1,2,3,4,5,6,7,8,9]

*/
// each
function each (collection, callback){
  
  if (Array.isArray(collection)){
    
    for (var i = 0; i < collection.length; i++){
      
      callback (collection[i], i, collection);
      
    }
    
  } else {
    
    callback (collection[key], key, collection);
    
  }
  
}

function reduce (array, callback, accumulator){
  
  each (array, function (value){
    
    if (accumulator === undefined){
      
      accumulator = value;
      
    } else {
      
      accumulator = callback (accumulator, value);
      
    }
    
  });
  
  return accumulator;
  
}

function flatten (array){
  
  return reduce (array, function (result, curr){
    
    result.concat(curr);
    return result;
    
  }, []);
  
  
}
var array = {[1,2,3],[4,5,6],[7,8,9]}
console.log(flatten(array));
