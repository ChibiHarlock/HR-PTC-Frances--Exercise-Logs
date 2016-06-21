/*
the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. 
The function does not change the value of the original sequence.

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

dropWhile(seq, isEven) // -> [2,4,6,2,4,2]
*/

function each (c, fun){

  for (var i = 0; i < c.length; i++){
  
    fun(c[i], i, c);
  
  }

}

function reduce (a, fun, acc){

  each(a, function(val){
  
    if (acc === undefined){
    
      acc = val;
    
    } else {
    
      acc = fun(acc, val);
    
    }
  
  });
  
  return acc;

}

function max(array){
	
	return reduce (array, function(maxNum, curr){
		
		if(curr > maxNum){
			
			maxNum = curr;
			
		}
		return maxNum;
		
	});
	
}

function dropWhile (arr, test){

  var m = max(arr);
  return reduce(arr, function(result, curr){
  
    if(test(curr)){
		
		if (curr != m){
			result.push(curr);
		}
    
    }
    return result;
  
  }, []);

}

function isEven(num) {
  return num % 2 === 0;
}
var seq = [2,4,6,8,1,2,5,4,3,2];

console.log(dropWhile(seq, isEven));

