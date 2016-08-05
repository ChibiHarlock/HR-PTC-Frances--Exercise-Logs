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

function concatAll(arr){
	var results = [];
	forEach(arr, function(subArray){
		map(subArray, function(item){
			results.push(item);
		});
	});
	return results;
}

function concatMap(arr, projection){
	return concatAll( 
		map(arr, function(item){
			return projection(item);
		})
	);
}

function reduce(arr, accumulator, startValue){
	forEach(arr, function(item){
		if(startValue === undefined){
			startValue = item;
		}else{
			startValue = accumulator(startValue, item);
		}
	});
	return startValue;
}

var videos = [
	{
		"id": 70111470,
		"title": "Die Hard",
		"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
	},
	{
		"id": 654356453,
		"title": "Bad Boys",
		"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
	},
	{
		"id": 65432445,
		"title": "The Chamber",
		"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
	},
	{
		"id": 675465,
		"title": "Fracture",
		"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
	}
],
bookmarks = [
	{id: 470, time: 23432},
	{id: 453, time: 234324},
	{id: 445, time: 987834}
],
videoIdAndBookmarkIdPairs = [];

// 21. SKIPPED

// 22. implement zip, takes two arrays and returns a combined new array
function zip(left, right, combiner){
	var results = [];
	for(var i = 0; i < Math.min(left.length, right.length); i++){
		results.push(combiner(left[i], right[i]));
	}
	return results;
}

// (zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

// 23. combine videos and booksmarks by index using zip
zip(videos, booksmarks, function(video, bookmark){
	return {
		videoId : video.id,
		bookmarkId : bookmark.id
	};
});


