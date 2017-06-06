var text = 'The sum is ';
function addIt(numA, numB) {
	var total = numA + numB;
	console.log(text + total);
}

function multiply(numA, numB) {
	var total = numA * numB
	return total;
	console.log("This is never going to happen")
}

console.log(multiply(29, 4));

/*addIt(8,8);
addIt(10,10);*/
var myClass = "You all are great!";
var Rose = {
	arms: 2,
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what) {
		console.log(what +' is awesome');
	}
}

Rose.slogan('JavaScript');
Rose.hairColor = 'black';
console.log(Rose.hairColor);
console.log(myClass);

