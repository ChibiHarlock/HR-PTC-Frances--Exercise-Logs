/*
Create a method (JS: function) every which returns every nth element of an array.

every([0,1,2,3,4])     // [0,1,2,3,4]
every([0,1,2,3,4],1)   // [0,1,2,3,4]
every([0,1,2,3,4],2)   // [0,2,4]
every([0,1,2,3,4],3)   // [0,3]
every([0,1,2,3,4],3,1) // [1,4]

interval will always be a positive integer (but may be larger than the size of the array).
start_index will always be within the bounds of the array.
*/

function every(array, test, index){

  return reduce(array, function(result, curr){
  
    if(test(curr)){
    
      result.push(index);
    
    }
    return result;
  
  }, []);

}
