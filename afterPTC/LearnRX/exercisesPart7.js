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
		"id": 65432445,
		"title": "The Chamber"
	},
	{
		"id": 675465,
		"title": "Fracture"
	},
	{
		"id": 70111470,
		"title": "Die Hard"
	},
	{
		"id": 654356453,
		"title": "Bad Boys"
	}
];

// 19. reducing with an initial value using Object.assign
reduce(videos, function(result, video){
	var obj = {};
	obj[video.id] = video.title;
	return Object.assign(result, obj);
},{});

var movieLists = [
	{
		name: "New Releases",
		videos: [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxarts": [
					{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	},
	{
		name: "Thrillers",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxarts": [
					{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
					{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		]
	}
];

// 20. Retrieve the id, title, and smallest box art url for every video. use concatMap, reduce (instead of filter), and map
concatMap(movieLists, function(movie){
	return concatMap(movie.videos, function(video){
		return reduce(video.boxarts, function(smallBoxart, curr){
			smallBoxart = ((smallBoxart.width * smallBoxart.height) < (curr.width * curr.height)) ? smallBoxart : curr;
			return smallBoxart;
		}).map(function(boxart){
			return {
				id : video.id,
				title : video.title,
				boxart : boxart.url
			};
		});
	})
});




