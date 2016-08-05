/*
*  Authored by Jarrett Kennedy 2016
*/

function print(name){
	console.log(name);
}

function forEach(collection, callback){
	collection.forEach(function(element, index){
		callback(element);
	});
}

var newReleases = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [5.0],
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
],
videoAndTitlePairs = [];

// Applying a function to a value and creating a new value is called a projection.
// 3. Project an array of videos into an array of {id,title} pairs using forEach()
forEach(newReleases, function(movie){
	videoAndTitlePairs.push(
          {
          	id : movie.id,
          	title : movie.title
          }
		);
});

// 4 implement map function that projects a new array
function map(arr, projection){
	var results = [];
	forEach(arr, function(value){
      results.push(projection(value));
	});
	return results;
}

// 5 Use map() to project an array of videos into an array of {id,title} pairs
map(newReleases, function(movie){
	return {
		id : movie.id,
		title : movie.title
	};
});