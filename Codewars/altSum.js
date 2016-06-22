/*
Write a method alternate_sq_sum (JS: alternateSqSum ) that takes an array of Integers as 
Input and finds the sum of squares of the elements at even positions (i.e 2nd 4th 6th etc etc elements) 
and the rest of the elements at odd Position (i.e 1st 3rd etc elements) without squaring them (the odd ones) 
thus completing whole array.


alternateSqSum([11, 12, 13, 14, 15]) // should return 379
*/

function alternateSqSum (array){

  return array.reduce(function(sum, curr){
  
    // if current index is even, square that number and add to sum
    if(curr % 2 === 0){
    
      sum += (curr * curr);
    
    } else {
    
      sum += curr;
    
    }
    return sum;
  
  },0);

}

console.log(alternateSqSum([11,12,13,14,15])); // => 379
