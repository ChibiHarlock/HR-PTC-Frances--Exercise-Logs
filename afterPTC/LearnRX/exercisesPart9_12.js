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

// The pricesNASDAQ collection looks something like this...
var pricesNASDAQ = [
	// ... from the NASDAQ's opening day
	{name: "ANGI", price: 31.22, timeStamp: new Date(2011,11,15) },
	{name: "MSFT", price: 32.32, timeStamp: new Date(2011,11,15) },
	{name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)},
	{name: "ANGI", price: 28.44, timeStamp: new Date(2011,11,16)},
	{name: "GOOG", price: 199.33, timeStamp: new Date(2011,11,16)}
	// ...and up to the present.
];
// print all of the MSFT share prices since then. Filter the collection for MSFT trades starting from ten days ago 
// and print each price record (including the time stamp) using the print() function
// 27. Stock ticker
function solution(pricesNASDAQ, printRecord) {
	var microSoftPrices,
	now = new Date(),
	tenDaysAgo = new Date(now.getFullYear(), now.getMonth, now.getDate() - 10);

	// use filter to filter the trades for MSFT prices recorded any time after 10 days ago
	microSoftPrices = pricesNASDAQ.filter(function(priceRecord){
		return priceRecord.name === "MSFT" && priceRecord.timeStamp > tenDaysAgo;
	});

	// Print the trades to the ouput console
	microSoftPrices.forEach(function(priceRecord){
		printRecord(priceRecord);
	});
	return microSoftPrices;
}

solution(pricesNASDAQ, print);


// 28. Subscribing to an event
function example(button){
	// the button click handler
	var handler = function(e){
		// Unsubscribe from the button event
		button.removeEventListener("click", handler);
		alert("Button was clicked. Unsubscribing from event.");
	};

	// add the button click handler
	button.addEventListener("click", handler);
}
/*
*/
