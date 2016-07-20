function palindrome(){
	var result = [];
	var p, revr;
	var max = 0;
	for(var i = 999; i > 0; i--){
		
		for(var j = 999; j > 0; j--){
			
			p = i * j;
			revr = p.toString().split("").reverse().join("");
			if(p == revr){
				if(p > max){
					
					max = p;
					break;
				}
				
			}
			
		}
		
	}
	
	return max;
	
} palindrome();
