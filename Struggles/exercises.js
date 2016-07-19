/*
Manipulate a string
var s = "audacity"
udacityizer(s) => "Udacity"
*/

function udacityizer(str){

  var result = str.split(""); // => result = ["a", "u", "d", "a", ...]
  for(var i = 0; i < result.length; i++){
  
    if(result[i] === "u"){
    
      result[i] = "U";
    
    }
  str = result.slice(1).join("");
  }
  return str;

}

