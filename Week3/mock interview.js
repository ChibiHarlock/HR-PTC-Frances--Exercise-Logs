//1. Create an array with (Object that has the year), (string of your name), and (the number 5)

var object = [
    {year : 2016},
    "Jarrett",
     5,

];



//2.
function timesTwo(num){

  return num * 2;

}


// 3. 
// use timesTwo function on the number value in the object array
timesTwo(object[2]);


// 4. Create each function that can work on objects, arrays and strings
// var arr = "abc"
function each(collection, callback){
  //your code here
  if(Array.isArray(collection) || typeof collection === "string"){
  
    for(var i = 0; i < collection.length; i++){
    
      callback(collection[i], i, collection);
    
      
    }
  
  } else {
  
    for(var key in collection){
    
      callback(collection[key], key, collection);
    
    }
  
  }
}


// 5.  Create reject function using each
// function(num){

  return num % 2 === 0;

}
function reject(collection, callback){
  //your code here
  var result = [];
  each(collection, function(value){
  
    if(!callback(value)){
    
      result.push(value);
    
    }
  
  });
  
  return result;
}


// 6.  Create reduce function using each
function reduce(collection, accumulator, startValue) {
 
 //your code here
 each(collection, function(val, key){
 
   if(startValue === undefined){
   
     startValue = val;
   
   } else {
   
     startValue = accumulator(startValue, val, key); 
   
   }
 
 });
 
 return startValue;
}

// 7. MAP

function map(collection, callback) {
  //your code here
  return reduce(collection, function(result, curr){
  
    result.push(callback(curr));
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
//example
numbersOfWins('LWLWLWWWLLWW')  // => {L: 5, W: 8};

function numberOfWins(str) {
  //your code here
  return reduce(str, function(obj, curr){
  
    obj[curr] = obj[curr] || 0;
    obj[curr]++;
    return obj;
    /* obj {
    
      obj[curr] : 1,
      L : 1
      W : 1
    
    }
    */
  
  },{});
}



//10. Create default function using reduce and each

function defaults(object1, object2){
  //your code here
  // end result will be a return of key:value pairs of object 1 and object 2
  // use each to access the objects key and values
  return reduce(object1, function(obj, curr, key){},
  
    obj[key] = curr;
    return obj;
  
  {
  
    obj[key] : 
  
  });
}

var iceCream = {flavor: "chocolate", temperature: "cold"};
defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots", temperature: "cold"}






