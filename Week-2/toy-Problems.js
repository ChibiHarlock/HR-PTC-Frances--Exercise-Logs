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

function nextNumber (num, array) {

  return reduce (array, function(smallNum, curr){
  	
  	// return the smallest number
  	if (curr > num){
  		if (curr % 2 !== 0){
  			
  			if ( curr % 3 === 0){
  				
  				smallNum = curr;
  				
  			}
  			
  		}
  		
  	} 
  	
  	
  	
    return smallNum;
  
  });

}

console.log(nextNumber(21, [28,3,9,4,25,30,35,15,105,5,2,12,14,21,18,19] )); // =. 105

