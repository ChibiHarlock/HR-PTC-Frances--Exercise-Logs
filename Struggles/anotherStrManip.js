/*
given a string with two names separated by spaces, insure the first name is Captial letter, and last name is all CAPS

var name = "jArrEtT KenNEdY"
nameChanger(name) => "Jarrett KENNEDY"
*/

function nameChanger(str){

  var finalName = str.split(" "); // => ["jArrEtT", "KenNEdY"]
  finalName[1] = finalName[1].toUpperCase(); // => ["jArrEtT", "KENNEDY"]
  finalName[0] = finalName[0].slice(0,1).toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName = finalName.join(" ");
  return finalName;

}
