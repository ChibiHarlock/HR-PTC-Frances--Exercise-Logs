function palindrome(){
	var p;
	var max = 0;
	var equation;
	for(var i = 999; i > 0; i--){
		
		for(var j = 999; j > 0; j--){
			
			p = i * j;
			if(isPalindrome(p)){
				if(p > max){
					max = p;
					equation = (i + " * " + j);
					console.log(equation);
				}
				
			}
			
		}
		
	}
	
	return max;
	
} palindrome();


function isPalindrome(num){
	
	var n = num.toString();
	var reverse = n.toString().split("").reverse().join("");
	
	return n === reverse;
	
}
