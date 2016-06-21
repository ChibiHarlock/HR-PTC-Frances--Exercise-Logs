// each
  /* CODE HERE */
 function each (collection, callback){
   
   if (Array.isArray(collection)){
     
     for (var i = 0; i < collection.length; i++){
       
       callback (collection[i], i, collection);
       
     }
     
   } else {
     
     for (var key in collection){
       
       callback (collection[key], key, collection);
       
     }
     
   }
   
 }
  
  // reduce
  /* CODE HERE */
function reduce (array, callback, accumulator){
   
   each (array, function (value){
     
     if (accumulator === undefined){
       
       accumulator = val;
       
     } else {
       
      accumulator = callback (accumulator, val);
       
     }
     
   });
   
   return accumulator;
   
 }
 
 
 // Sum of Positives
 // write a function that uses reduce, that returns the sum of only positive numbers in an array.
 /* CODE HERE */
 // var num = [1, -2, 3, 4, -5, -6] => 8
function sumOfPositives (array){
  
   return reduce (array, function (sum, curr){
     
     if (curr > 0){
       
       sum += curr;
       
     }
     
     return sum;
     
   }, 0);
   
 }
  
  // filter with reduce
  /* CODE HERE */
 // var num = [1,2,3]; => [1,3]
 function filter (array, test){
   
   return reduce (array, function (result, curr){
     
     if (test(curr)){
       
      result.push(curr);
       
     }
     
     return result;
     
   }, []);
   
 }
  
  // map with reduce
  /* CODE HERE */
 // var num = [1,2,4,5]
 function map (array, callback){
   
   return reduce (array, function (result, curr){
     
     result.push(callback(curr));
     return result;
     
   }, []);
   
 }
  
  // some with reduce
  // return true if some of the numbers in an array passes a test
  /* CODE HERE */
 function some (array, test){
   
   return reduce (array, function (hasValue, curr){
     
     if (test (curr)){
       
       hasValue = true;
       
     }
     return hasValue;
     
   }, false);
   
 }
  
 // minValue with reduce
 // return the mininum value of an array of numbers
 // var num = [4, 2, 1024, 2048, 9] => 2
 /* CODE HERE */
 function minValue (array){
   
   return reduce (array, function (min, curr){
     
     if (curr < min){
       
       min = curr;
       
     }
     
     return min;
     
   });
   
 }
