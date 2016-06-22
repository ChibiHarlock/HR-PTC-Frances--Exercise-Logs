/*
Write a function that returns both the minimum and maximum number of the given list/array.

Examples

minMax([1,2,3,4,5])   == [1,5]
minMax([2334454,5])   == [5, 2334454]
minMax([1])           == [1, 1]


*/

function minMax (array){
  
  function max (){
    
    return array.reduce(function(max, curr){
      
      if (curr > max){
        
        max = curr;
      }
      return max;
      
    });
    
  }
  
  function min(){
    
    return array.reduce(function(min, curr){
      
      if(curr < min){
        
        min = curr;
        
      }
      return min;
      
    });
    
  }
  
  return [(min(),max()];
  
}
