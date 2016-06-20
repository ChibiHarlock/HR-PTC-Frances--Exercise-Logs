// each
function each (collection, callback){

  if (Array.isArray(collection)){
  
    for (var i = 0; i < collection.length; i++){
    
      callback (collection[i], i, collection);
    
    }
  
  } else {
  
    for (var key in collection) {
    
      callback (collection[key], key, collection);
    
    }
  
  }

}

// reduce with each
functoin reduce (array, callback, accumulator){

  each (array, function(val){
  
    if (accumulator === undefined){
    
      accumulator = val;
    
    } else {
    
      accumulator = callback(accumulator, val);
    
    }
  
  });
  
  return accumulator;

}

// filter with reduce
function filter (array, test){

  var result = reduce (array, function (init, prev){
  
    if (test(prev)){
    
      init.push(prev);
    
    }
    
    return init;
    
  }, []);
  
  return result;

}

// map with reduce
function map (array, callback){

  var result = reduce (array, function(init, prev){
  
    init.push(callback(prev));
    return init;
  
  }, []);
  
  return result;

}
