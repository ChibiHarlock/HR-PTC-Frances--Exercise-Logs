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
				"interestingMoments": [
					{ type: "End", time:213432 },
					{ type: "Start", time: 64534 },
					{ type: "Middle", time: 323133}
				]
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
				"interestingMoments": [
					{ type: "End", time:54654754 },
					{ type: "Start", time: 43524243 },
					{ type: "Middle", time: 6575665}
				]
			}
		]
	},
	{
		name: "Instant Queue",
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
				"interestingMoments": [
					{ type: "End", time:132423 },
					{ type: "Start", time: 54637425 },
					{ type: "Middle", time: 3452343}
				]
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
				"interestingMoments": [
					{ type: "End", time:45632456 },
					{ type: "Start", time: 234534 },
					{ type: "Middle", time: 3453434}
				]
			}
		]
	}
];

// 24 Retrieve each video's id, title, middle interesting moment time, and smallest box art url. using zip
concatMap(movieLists, function(movie){
	return concatMap(movie.videos, function(video){
		return zip(
			video.boxarts.reduce(function(smallB, curr){
					smallB = ((smallB.width * smallB.height) 
					< (curr.width * curr.height)) 
					? smallB : curr;
		        return smallB;
			}),
			video.interestingMoments.filter(function(moment){
				return moment.type === "Middle";
			}),
			function(boxart, moment){
				return {
		          id : video.id,
		          title : video.title,
		          time : moment.time,
		          url : boxart.url
		        };
			}
		);
	});
});