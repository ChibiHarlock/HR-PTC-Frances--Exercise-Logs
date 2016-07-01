// 1. create a function that returns the number doubled
function doubleMe(n){

  // code goes here
  return n * 2;

}

// 2. create a function that returns true if the number is even, and false otherwise
function isEven(n){

  // code goes here
  return (n % 2 === 0) ? true : false;

}

// 3. create a function that returns only the extension filename of a string, or false
function fileExtension(str){

  // code goes here
  var result = "" || false;
  function each(collection, callback){
    
    if(typeof collection === "string"){
      
      for(var i = 0; i < collection.length; i++){
        
        callback(collection[i], i, collection);
        
      }
      
    }
    
  }
  
  each(n, function(item, index){
    
    if(item === "."){
      
      result = n.slice(index+1);
      
    }
    
  });
  
  return result;

}


// 4. create a function that returns the longest string in a array of strings.
// the array can have other types like boolean and arrays, so check for that too
function longestString(arr){

  // code goes here
  // return the longest string in an array
  // sort the array first from large to small by length
  // return the sorted array that only have strings
  // slice the first item of the list, which is the largest string
  arr.sort(function(a,b){
    
    return b.length - a.length;
    
  });

  return arr.filter(function(item){
    
    if(typeof item === "string"){
      
      return item;
      
    }
    
  }).slice(0,1);

}


// 5. create a function that returns the sum of integers of an array, it should handle all nested levels
function arraySum(arr){

  // code goes here
  // similar to flatten, handle all levels of depth
  // use reduce to flatten the array and add integers to the startValue 
  // if the curr value is an array, use recursion to run the function on the array again
  // if the value is a number, then add that to the total sum, else add 0
  // 0 is for any other value that is not a number
  return arr.reduce(function(sum, isNested){
    
    sum += (Array.isArray(isNested)) ? arraySum(isNested) : (typeof isNested === "number") ? isNested : 0;
    return sum;
    
  },0);

}
