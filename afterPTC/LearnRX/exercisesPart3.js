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

function map(arr, projection){
	var results = [];
	forEach(arr, function(value){
      results.push(projection(value));
	});
	return results;
}

var newReleases = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}
],
videos = [];

// 6.  Use forEach() to collect only those videos with a rating of 5.0
forEach(newReleases, function(movie){
	if(movie.rating === 5.0){
		videos.push(movie);
	}
});

// 7. implement filter to project objects that pass a test to a new array
function filter(arr, test){
	var results = [];
	forEach(arr, function(value){
		if(test(value)){
			results.push(value);
		}
	});
	return results;
}

	// 8. Chain filter and map to collect the ids of videos that have a rating of 5.0
var videos = map(
	filter(newReleases, function(movie){
		return movie.rating === 5.0;
	}),
	function(movie){
		return movie.id;
	}
);