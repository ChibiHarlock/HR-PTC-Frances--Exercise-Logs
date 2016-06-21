/*
Make a function that receives a value, val and outputs the smallest higher number than the given value, 
and this number belong to a set of positive integers that have the following properties:
*/

function each (collection, callback){

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

function reduce (array, callback, accumulator) {

  each (array, function (value) {
  
    if (accumulator === undefined) {
    
      accumulator = value;
    
    } else {
    
      accumulator = callback (accumulator, value);
    
    }
  
  });
  
  return accumulator;

}

function nextGivenHigherNum (num, array) {

  return reduce (array, function(smallNum, curr){
  
    if (curr < smallNum && curr > num){
      
      smallNum = curr;
      
    }
    return smallNum;
  
  }, 0);

}

console.log(nextGivenHigherNum(12, [3, 9, 15, 21]));
