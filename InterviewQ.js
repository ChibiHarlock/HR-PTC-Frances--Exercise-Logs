//1. // create an array myArray with numbers 1,2,3,4,5 in order
var myArray = [1,2,3,4,5];

//2. // create a object myObjects with key:value pairs for your name, email and phone number
var myObjects = {

  name : "Jarrett",
  email : "kennedyjt88@gmail.com",
  phone : 7722333385
};

//3. create a function print that console logs a value
function print(val){

  console.log(val);
  
}

//4. use your new print function to log the second element in your array
print(myArray[1]);

//5. use print to log your name from myObjects
// two ways to do this
print(myObjects.name);
print(myObjects["name"]);

//6. create each function that handles arrays and objects
function each(col, callback){

  if(Array.isArray(col)){
  
    for(var i = 0; i < col.length; i++){
    
      callback(col[i], i, col);
    
    }
  
  } else {
  
    for(var key in col){
    
      callback(col[key], key, col);
    
    }
  
  }
}


//7. use each to return every element in your array
each(myArray, function(val){

  console.log(val);

});

//8. there's another way to use each with objects, do this
each(myObjects, print);
// print is a function that logs each value, and it doesn't need to be declared
// because it was declared when it was created as a function

//9. fix this filter code 
function filter(myArray, test){

  var result = [];
  each(myArray, function(item){
  
    if(test(item)){
    
      result.push(item);
    
    }
  
  return result;
  
  }};


}

//10. 

/*
use filter with lists to return only the elements whose first element is a string

write any additional functions you might need
*/

  
  var list1 = [4, 'two', ['d', 'e']];
  var list2 = ['zero', 8, 2];
  var list3 = [{'person': 'you'}, 'two', 9];
  
  var lists = [list1,list2,list3];
  
  // filter 
  function firstEle(arr){
  
    return filter(arr, function(ele){
    
      return typeof ele[0] === "string";
    
    });
  
  }
