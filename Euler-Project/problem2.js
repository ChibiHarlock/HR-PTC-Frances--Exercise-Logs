
// Solution in JavaScript without recursion

function evenFibonacci(first, last, limit){
	
	// set limit to 4 million if it's undefined
	limit = (limit === undefined)? 4000000 : limit;
	
	// store the sum of even terms
	var sum = 0;
	
	while(last <= limit){
		// if the current term is even, add to sum
		if(isEven(last)){
			
			sum += last;
		}
		last += first;
		first = last - first;
		
	}
	return sum;
	
}


function isEven(num){
	
	return num % 2 === 0;
	
}
