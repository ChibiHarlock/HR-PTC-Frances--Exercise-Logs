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
