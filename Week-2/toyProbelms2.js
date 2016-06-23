// Largest items in a list
// Write a function that returns the two largest items in a list(array)
// sort the list if it's unsorted, you have no idea, so treat it like that
// sort from small to big

// eg. array = [1,89,23,5,43,900,88,243]
// largest(3,array) => [89,243,900]

// WRITE CODE HERE
function largest(n , arr){
  
  // is the array unsorted?
  arr.sort(function(a,b){
    
    return a - b;
    
  });
  
  // arr is now sorted [1,5,23,43,88,89,243,900]
  
  // slice method to remove n of the largest values
  return arr.slice(-n);
  
  
}
console.log(largest(3, [1,89,23,5,43,900,88,243]));

// Without function
// returns items that are not in the exclusions array
// exclusions will always be an array, with at least 1 value


// without([1,2,3,1,2,4], [1,2]) => [3,4]


// WRITE CODE HERE
// reject function
function reject(array, test){
	
	return array.reduce(function(result, curr){
		
		if(!test(curr)){
			
			result.push(curr);
			
		}
		return result;
		
	}, []);
	
}

function without(arr, exclusions){

  var value = exclusions;
  return reject(arr, function(item){
    
    return value.indexOf(item) !== -1;
    
  });
  
}

console.log(without([1,2,1,3,1,4], [1,2]));
