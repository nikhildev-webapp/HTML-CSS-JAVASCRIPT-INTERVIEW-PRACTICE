// javascript basic question

//Question 1-create a variable and store your name and age and print it.
let Name = 'Nikhil';
let Age = 21;
console.log(Name);
console.log(Age);

//Question2-add tow number without using functions
let Num1 = 20;
let Num2 = 30;
let sumOfNum = Num1 + Num2;
console.log(sumOfNum);

//Question3-Swap two varibales without third variable
let X = 10;
let Y = 20;
console.log('Before swapping: X = ' + X + ', Y = ' + Y);
[X, Y] = [Y, X];
console.log('After swapping: X = ' + X + ', Y = ' + Y);

//Question 4-convert string to number
let StrNum = '25';
console.log(`Str Value: ${StrNum}, Type: ${typeof StrNum}`); // Output: string
let Num = Number(StrNum);
console.log(`Num Value: ${Num}, Type: ${typeof Num}`);

//Task-1Personal Introduction
let FirstName = 'Nikhil';
let LastName = 'Kholiya';
let UserName = FirstName + ' ' + LastName;
let UserAge = 21;
let UserCity = 'Delhi';
console.log(`Hello, my name is ${UserName}.\nI am ${UserAge} years old.\nI live in ${UserCity}.`);

//Task2-Calculator
const prompt=require('prompt-sync')();
let Number1=Number(prompt("Enter the first number:"));
let Number2=Number(prompt("Enter the second number:"));
let sum=Number1+Number2;
let difference = Number1 - Number2;
let product = Number1 * Number2;
let quotient = Number1 / Number2;
console.log('Sum of given numbers: ' + sum);
console.log('Difference of given numbers: ' + difference);
console.log('Product of given numbers: ' + product);
console.log('Quotient of given numbers: ' + quotient);
