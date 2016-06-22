/*
var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]
*/

function each (c, fun) {

  if (Array.isArray(c)){
  
    for (var i = 0; i < c.length; i++) {
    
      fun(c[i], i, c);
    
    }
  
  } else {
    
    for (var key in c){
      
      fun(c[key], key, c);
    }
  
  }

}

function reduce (arr, fun, acc){

  each (arr, function(val){
  
  if (acc === undefined){
  
    acc = val;
  
  } else {
  
    acc = fun(acc, val);
  
  }
  
  });
  
  return acc;
  
}

function reject (array, test){

  return reduce(array, function(result, curr){
  
    if(!test(curr)){
    
      result.push(curr);
    
    }
    return result;
  
  }, []);

}

console.log(reject([1,2,3,4,5,8,10,11], function(num){return num > 5;})); // => [1,2,3,4,5]
