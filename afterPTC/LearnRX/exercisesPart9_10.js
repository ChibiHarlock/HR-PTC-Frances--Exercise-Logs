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
		"name": "Thrillers"
	}
];

var videos = [
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
];
// 25. Converting from Arrays to Trees
map(lists, function(list){
	return {
		name : list.name,
		videos : videos.filter(function(video){
			return video.listId === list.id;
		}).map(function(video){
			return {
				id : video.id,
				title : video.title
			};
		})
	};
});

/*Output 
We want to build an array of list objects, each with a name and a videos array. 
The videos array will contain the video's id and title.
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"id": 675465,
				"title": "Fracture"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"id": 654356453,
				"title": "Bad Boys"
			}
		]
	}
]
        
*/
