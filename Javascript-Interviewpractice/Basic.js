// Javascript-Basic.js
//Solveing the Basic Javascript problems
console.log("Hello World");
const prompt = require("prompt-sync")(); //for taking input from user

//Exercise 1:Create a variable for username,userage and city
let username = prompt("Enter your name: ");
let userage = prompt("Enter your age: ");
let city = prompt("Enter your city: ");
console.log(`Username:${username}\nUserage:${userage}\nUserCity:${city}`);

//Exercise2-writa a program to find the sum of two numbers
let num1 =23 ;
let num2 =2;
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

//Eercise3-check the number is positive or negative
console.log('Add the number to check whether it is positive or negative');
let numberInput = parseInt(prompt('Enter a number:'))
if (numberInput >= 0) {
    console.log('The number is positive');
} else {
    console.log('The number is negative');
}

//Exercise4-compare two number 
let X_value = 12
let Y_value = '12';
console.log('Both values are equal (loose checking):', X_value == Y_value);
console.log('Both values are equal (strict checking):', X_value === Y_value);

//Exercise5-find the square,cube of the number.
let numberValue = 3
console.log(`The square of ${numberValue} is: ${numberValue ** 2}`);
console.log(`The cube of ${numberValue} is: ${numberValue ** 3}`);

//Exercise6-find the simple interest
let principal_Amount = 10000;
let rate_of_Interest = 5;
let time_period = 3;
let simple_interest=(principal_Amount * rate_of_Interest * time_period) / 100;
console.log(`The simple interest is: ${simple_interest}`);

//Exercise7-find the area of circle
let radius = 8;
let area_of_circle = Math.PI * radius ** 2;
console.log(`The area of the circle with radius ${radius} is: ${area_of_circle}`);

//Exercsise8=check the number is even or odd
let numberToCheck = 7;
if (numberToCheck % 2 === 0) {   
    console.log(`${numberToCheck} is an even number.`);
} else {
    console.log(`${numberToCheck} is an odd number.`);
}

//Exericse9-find the remainder and quotient of two numbers
let dividend_number = 18;
let divisor_number = 4;
let quotient = Math.floor(dividend_number / divisor_number);
let remainder = dividend_number % divisor_number;
console.log(`The quotient of ${dividend_number} and ${divisor_number} is: ${quotient}`);
console.log(`The remainder of ${dividend_number} and ${divisor_number} is: ${remainder}`);