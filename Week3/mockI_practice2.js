//1. Create an array with (Object that has the year), (string of your name), and (the number 5)
    //your code here
    var array = [{year : 1988}, "Jarrett", 5];


//2. write the function timesTwo that multiplys the number by 2
    //your code here
    function timesTwo(num){
    	
    	return num * 2;
    	
    }


// 3. 
// use timesTwo function on the number value in the object array
    //your code here
    timesTwo(array[2]);


// 4. Create each function that can work on objects, arrays and strings
    //your code here
    function each(collection, callback){
    	
    	if(Array.isArray(collection) || typeof collection === "string"){
    		
    		for(var i = 0; i < collection.length; i++){
    			
    			callback(collection[i], i, collection);
    			
    		}
    		
    	} else{
    		
    		for(var key in collection){
    			
    			callback(collection[key], key, collection);
    			
    		}
    		
    	}
    	
    }


// 5.  Create reject function using each
    //your code here
    function reject(arr, test){
    	
    	var result = [];
    	each(arr, function(item){
    		
    		if(!test(item)){
    			
    			result.push(item);
    			
    		}
    		
    	});
    	
    	return result;
    	
    }


// 6.  Create reduce function using each
    // your code here
    // return a new array with a single value
    // gain access to the arrays items with each function
    // if the startValue is undefined then assign the first element of the array
    // otherwise startValue will equal the accumulator with arguments startValue and the item
    // return the startValue
    function reduce(arr, accumulator, startValue){
    	
    	
    	each(arr, function(item, key){
    		
    		if(startValue === undefined){
    			
    			startValue = item;
    			
    		} else {
    			
    			startValue = accumulator(startValue, item, key);
    			
    		}
    		
    	});
    	
    	return startValue;
    	
    }


// 7. MAP
    //your code here
    function map(arr, predicate){
    	
    	return reduce(arr, function(result, item){
    		
    		result.push(predicate(item));
    		return result;
    		
    	},[]);
    	
    }
    

// 8.  Debug filter that uses reduce inside

function filter(collection, predicate) {
  return reduce(collection, function(result, item) {
    if(predicate(item)){
      result.push(item);
    }

    return result;
  }, []);
}


// 9.  Create numberOfWins function using reduce
/*example
numbersOfWins('LWLWLWWWLLWW')  // => {L: 5, W: 8};
*/
function numberOfWins(str) {
  //your code here
  // reduce the string into a object that keeps track of the # of letter occurences in the string
  // assign the each letter in the string to a new key
  // use the or guard operator to store a number as the value of the letter key
  // increment the key which will increment the value 
  // return the new object
  return reduce(str, function(obj, decision){
  	
  	obj[decision] = obj[decision] || 0;
  	obj[decision]++;
  	return obj;
  	
  },{});
}
numberOfWins('LWLWLWWWLLWW');


//10. Create defaults function using reduce and each

function defaults(object1, object2){
  //your code here
  // adjust the reduce function to acces the key of objects
  // returns object1 with keys included from object2, if the keys are the same, then no overwrite occurs
  // reduce object1 into a new object and store the key:value pairs 
  // use each inside of reduce to access object2's key and value pairs
  // if the new object's key from object2 is undefined, then assign object2's key:value to the new object
  return reduce(object1, function(obj,curr,key){
  	
  	each(object2, function(val, k){
  		
  		if(obj[k] === undefined){
  			
  			obj[k] = val;
  			
  		}
  		
  	});
  	
  	obj[key] = curr;
  	return obj;
  	
  },{});
  
}

/*
var iceCream = {flavor: "chocolate"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
*/

var iceCream = {flavor: "chocolate"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});


