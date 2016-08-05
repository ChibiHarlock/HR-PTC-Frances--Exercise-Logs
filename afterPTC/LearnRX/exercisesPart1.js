/*
*  Authored by Jarrett Kennedy 2016
*/

var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

// 1. print function to print all the names in the array
function print(name){
	console.log(name);
}

// 2. function to use print as a callback that prints all names
function forEach(collection, callback){
	collection.forEach(function(element, index){
		callback(element);
	});
}
forEach(names, print);