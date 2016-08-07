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

function zip(left, right, combiner){
	var results = [];
	for(var i = 0; i < Math.min(left.length, right.length); i++){
		results.push(combiner(left[i], right[i]));
	}
	return results;
}
// (zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

var lists = [
	{
		"id": 5434364,
		"name": "New Releases"
	},
	{
		"id": 65456475,
		name: "Thrillers"
	}
],
videos = [
	{
		"listId": 5434364,
		"id": 65432445,
		"title": "The Chamber"
	},
	{
		"listId": 5434364,
		"id": 675465,
		"title": "Fracture"
	},
	{
		"listId": 65456475,
		"id": 70111470,
		"title": "Die Hard"
	},
	{
		"listId": 65456475,
		"id": 654356453,
		"title": "Bad Boys"
	}
],
boxarts = [
	{ videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
	{ videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
	{ videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
	{ videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
	{ videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
	{ videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
	{ videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
	{ videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
	{ videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
],
bookmarks = [
	{ videoId: 65432445, time: 32432 },
	{ videoId: 675465, time: 3534543 },
	{ videoId: 70111470, time: 645243 },
	{ videoId: 654356453, time: 984934 }
];

// 26.  Converting from Arrays to Deeper Trees
// create an array object with name and videos, videos will be another array object with id, title, time, and boxart
//  Each object has a parent id, indicating its parent.

map(lists, function(list){
	return {
		name : list.name,
		videos : concatMap(
			videos.filter(function(video){
			return video.listId === list.id;
		}),
		function(video){
			return zip(
				bookmarks.filter(function(bookmark){
					return bookmark.videoId === video.id;
				}),
				boxarts.filter(function(boxart){
					return boxart.videoId === video.id;
				}).reduce(function(smallB, curr){
					smallB = ((smallB.width*smallB.height)<(curr.width*curr.height)) ? smallB : curr;
					return smallB;
				}),
				function(bookmark, boxart){
					return {
						id : video.id,
						title : video.title,
						time : bookmark.time,
						boxart : boxart.url
					};
				}
			);
		})
	};
});
        
/*
*/
