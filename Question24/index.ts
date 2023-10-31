const name1 : string = "ABUBAKAR";
const name2 : string = "ATIF";

console.log("Is name1 equal to name2? I predict False.");
console.log(name1 === name2);

console.log("Is name1 not equal to name2? I predict True.");
console.log(name1 !== name2);

const text = "Good Morning!";
const lowercaseText = text.toLowerCase();

console.log("Is lowercaseText equal to 'Good morning!'? I predict True.");
console.log(lowercaseText === 'Good Morning!');

const number1 = 10;
const number2 = 7;

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

const isGood = true;
const isHot = true;

console.log("Is it good and hot? I predict True.");
console.log(isGood && isHot);

const isRaining = true;
const isCold = false;

console.log("Is it raining or cold? I predict True.");
console.log(isRaining || isCold);

const fruits = ["apple", "banana", "cherry", "date"];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple"));

// Test whether an item is not in an array
console.log("Is 'melon' not in the fruits array? I predict True.");
console.log(!fruits.includes("melon"));
