/*
Increment the last element in an array
var sampleArray = [0,0,7]
incrementLastElement(sampleArray) => [0,0,8]
*/

function incrementLastElement(arr){

  var newArray = [];
  
  newArray = arr.slice(0);
  var lastElement = newArray.pop();
  newArray.push(lastElement + 1);
  
  return newArray;


}
