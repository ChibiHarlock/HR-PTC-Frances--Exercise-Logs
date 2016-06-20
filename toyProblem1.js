/*
********BEFORE YOU WORK ON THIS, IMPLEMENT THE FUNCTIONS EACH, REDUCE(use each), and FILTER (use reduce)***********
*/

// Each
function each (collection, callback){

  if(Array.isArray(collection)){
  
    for (var i = 0; i < collection.length; i++){
    
      callback(collection[i], i, collection);
    
    }
  
  } else {
  
    for (var key in collection) {
    
      callback(collection[key], key, collection);
    
    }
  
  }

}

// reduce with each
function reduce (array, callback, accumulator){

  each(array, function(value){
  
    // check if the accumulator is undefined
    if (accumulator === undefined){
    
      accumulator = value;
    
    } else {
    
      accumulator = callback(accumulator, value);
    
    }
  
  });
  
  return accumulator;

}

// filter with reduce
function filter (array, test){

  var result = reduce(array, function(init, prev){
  
    if (test(prev)){
    
      init.push(prev);
    
    }
    return init;
  
  }, []);
  
  return result;

}




*********************FUNCTIONS ABOVE HERE***********************************
/*
Given a string, remove any characters that are not unique from the string.
e.g.  'abccdefe' => 'abdf'
write a function called onlyUnique that takes in a string and returns a string.
*/

function onlyUnique(str){

  // split the str into an array
  var result = str.split("");
  // use reduce to create an object that keeps track of the occurences of a letter
  var hash = reduce (result, function(init, prev){
  
    init[prev] = init[prev] || 0;
    init[prev]++;
    return init;
  
  }, {});
  
  var finalResult = filter (result, function(key){
  
    return hash[key] === 1;
  
  }).join("");
  
  return finalResult;
}

console.log(onlyUnique('abccdefe'));
