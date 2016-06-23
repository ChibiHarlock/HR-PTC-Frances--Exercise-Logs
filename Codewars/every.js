/*
This one can be solved without abstraction

every([0,1,2,3,4],3,1); => [1,4]

returns every nth element of an array.

With no arguments, array.every it returns every element of the array.
With one argument, array.every(interval) it returns every intervalth element.
With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index


*/

function every(arr, interval, start){

  var result = [];
  for (var i = start || 0; i < arr.length; i += interval || 1){
  
    result.push(arr[i]);
  
  }
  
  return result;
  
}
