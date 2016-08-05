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

var movieLists = [
	{
		name: "Instant Queue",
		videos : [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxarts": [
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxarts": [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	},
	{
		name: "New Releases",
		videos: [
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxarts": [
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxarts": [
					{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
					{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
					{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
				],
				"url": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		]
	}
];

// 12. Retrieve id, title, and a 150x200 box art url for every video
concatAll(
	concatAll(
		map(movieLists, function(movie){
			return movie.videos.map(function(video){
				return filter(video.boxarts, function(boxart){
					return boxart.width === 150;
				}).map(function(boxart){
					return {
						id : video.id,
						title : video.title,
						boxart : boxart.url
					};
				});
			});
		})
	)
);

// 13. implement concatMap, helper function to fuse concatAll and map, for quicker query tree execution
function concatMap(arr, projection){
	return concatAll( 
		map(arr, function(item){
			return projection(item);
		})
	);
}

// 14. Use concatMap() to retrieve id, title, and 150x200 box art url for every video
var complex = concatMap(movieLists, function(movie){
	return concatMap(movie.videos, function(video){
		return filter(video.boxarts, function(boxart){
			return boxart.width === 150;
		}).map(function(boxart){
			return {
				id : video.id,
				title : video.title,
				boxart : boxart.url
			};
		});
	})
});


