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

function filter(arr, test){
	var results = [];
	forEach(arr, function(value){
		if(test(value)){
			results.push(value);
		}
	});
	return results;
}

var movieLists = [
	{
		name: "New Releases",
		videos: [
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
			}
		]
	},
	{
		name: "Dramas",
		videos: [
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
		]
	}
],
allVideoIdsInMovieLists = [];

// 9. Flatten the movieLists array into an array of video ids, mix functions and built methods
map(movieLists, function(movie){
	movie.videos.map(function(video){
		allVideoIdsInMovieLists.push(video.id);
	});
});

// 10. implement concatAll, for flattening a query tree to project a new array
function concatAll(arr){
	var results = [];
	forEach(arr, function(subArray){
		map(subArray, function(item){
			results.push(item);
		});
	});
	return results;
}

// 11. Use map() and concatAll() to project and flatten the movieLists into an array of video ids
concatAll(
	map(movieLists, function(movie){
		return movie.videos.map(function(video){
			return video.id;
		});
	})
);