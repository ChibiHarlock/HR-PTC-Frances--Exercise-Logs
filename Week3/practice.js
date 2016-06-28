// each
function each(collection, callback){
  
  if(Array.isArray(collection)){
    
    collection.foreach(function(item, index, self){
      
      callback(item, index, self);
      
    });
  } else {
    
    for(var key in collection){
      
      callback(collection[key], key, collection);
      
    }
    
  }
  
}

// reduce
function reduce(arr, callback, accumulator){
  
  each(arr, function(item){
    
    if(accumulator === undefined){
      
      accumulator = item;
      
    } else {
      
      accumulator = callback(accumulator, item);
      
    }
    
  });
  
  return accumulator;
}

// filter
function filter(arr, test){
  
  return reduce(arr, function(passed, curr){
    
    if(test(curr)){
      
      passed.push(curr);
      
    }
    return passed;
    
  }, []);
  
}

// map
function map(arr, callback){
  
  return reduce(arr, function(result, curr){
    
    result.push(curr);
    return result;
    
  }, []);
  
}

