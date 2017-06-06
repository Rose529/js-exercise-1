// This declares the variable myName and assigns it the string value of my name 
var myName = 'Roseanny De La Cruz'; /* var with value/string in one*/
//This declares myage var and sets it to a number
var myAge = 23;
//This declares the variable myHobbies and assigns it to an array of strings
var myHobbies = ['Listen to music', 'Working Out', 'Spend time with family'];
// This declares the variable myDog as an object and assigns its various properties
var myDog = {
	name: 'Maya',
	age: 6,
	likes: ['To eat', 'Follow me around', 'Chew my shoes']
}; // <-- object properties are accessed via dot notation
console.log(myDog.name);
console.log(myDog.age);
//items within an array can be accessed via [], arrays start counting from 0]
console.log(myDog.likes[1]);
// console.log(myName); /* appears in inspect*/
// console.log(myAge);
// console.log(myHobbies);