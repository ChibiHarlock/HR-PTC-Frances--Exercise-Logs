natural numbers below 10 and are multiples of 3 or 5
=> 3, 5, 6, 9

sum of these numbers is 23

function sumNaturals(num){

  var sum = 0;
  for(var i = 1; i < num; i++){
  
    if(i % 3 === 0 || i % 5 === 0){
    
      sum += i;
    
    }
  
  }
  
  return sum;

}

sumNaturals(10) => 23
