var addTwoValues = function(val1, val2, func) {
	var sum = val1 + val2;
	func(sum);
}

var presentSum = function(val) {
	console.log("The sum is " + val);
}

var subtractFromSum = function(originalValue) {
	var newValue = originalValue - 1;
	console.log("The new value is " + newValue);
}

addTwoValues(1, 2, presentSum);
addTwoValues(1, 2, subtractFromSum);