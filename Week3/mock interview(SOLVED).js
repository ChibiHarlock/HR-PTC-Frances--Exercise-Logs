//1. Create an array with (Object that has the year), (string of your name), and (the number 5)
    //your code here
    var arr = [{year : 2016}, "Jarrett", 5];


//2. write the function timesTwo that multiplys the number by 2
    //your code here
    function timesTwo(n){
        
        return n * 2;
        
    }

// 3. 
// use timesTwo function on the number value in the object array
    //your code here
    timesTwo(arr[2]);

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
    function reject(arr, predicate){
        
        var result = [];
        each(arr, function(item){
            
            if(!predicate(item)){
                
                result.push(item);
                
            }
            
        });
        
        return result;
        
    }

// 6.  Create reduce function using each
    //your code here
    function reduce(arr, accumulator, startValue){
        
        each(arr, function(value, key){
            
            if(startValue === undefined){
                
                startValue = value;
            }
            else{
                
                startValue = accumulator(startValue, value, key);
                
            }
            
        });
        
        return startValue;
        
    }

// 7. MAP
    //your code here
    function map(arr, callback){
        
        return reduce(arr, function(result, curr){
            
            result.push(callback(curr));
            return result;
            
        }, []);
        
    }
    

// 8.  Debug filter that uses reduce inside

function filter(collection,predicate){
  return reduce(collection, function(result,item) {
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
  return reduce(str, function(obj, curr){
      obj[curr] = obj[curr] || 0;
      obj[curr]++;
      return obj;
      
  }, {});
}



//10. Create defaults function using reduce and each

function defaults(object1, object2){
  //your code here
  return reduce(object1, function(obj, curr, key){
      
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
