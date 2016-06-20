// Each function 
// able to handle an array or a object
function each (collection, callback){

  if (Array.isArray(collection)){
  
    for (var i = 0; i < collection.length; i++){
    
      callback(collection[i], i, collection);
    
    }
  
  } else {
  
    for (var key in collection){
    
      callback (collection[key], key, collection);
    
    }
  
  }

}

// Filter using each
// eg. var numbers = [1,2,3]; 
// filter(numbers, function(num){ return num % 2 === 0;  }); => [2]

function filter (array, test){
  var result = [];
  each (array, function(value){
  
    if (test(value){
    
      result.push(value);
    
    }
  
  });
  
  return result;
  

}

// map with each
/*
var numbers = [1,2,3];
map(numbers, function(num){ return num * 4;}); => [4,8,12]
*/
function map(array, callback){

  
  filter(array, function(){
  
    return 
  
  });

}
