// condition if-else
// question 1-take the number from user and check if it is even or odd
const prompt = require("prompt-sync")(); //its only required for node js environment to take input from user not in browser
let UserNumber = Number(prompt('Enter the Number'));
if (UserNumber % 2 === 0) {
    console.log('The Number is Even')
} else {
    console.log('The Number is Odd')
}

//Question 2-Take the number from user and check if it is positive, negative or zero
let UserNumber2 = Number(prompt('Enter the Number:'));
if (UserNumber2 > 0) {
    console.log('The Number is Positive')
} else if (UserNumber2 < 0) {
    console.log('The Number is Negative');

} else {
    console.log('The Number is Zero');
}

//Question3-Find largest of 2 numbers.
let Number1 = Number(prompt('Enter the First Number:'));
let Number2 = Number(prompt('Enter the Second Number:'));
if (Number1 > Number2) {
    console.log('The Largest Number is ' + Number1);
} else if (Number2 > Number1) {
    console.log('The Largest Number is' + Number2);

} else {
    console.log('Both Numbers are Equal');
}

//Question4-find the largest of 3 Numbers
let Num1 = Number(prompt('Enter the First Number:'));
let Num2 = Number(prompt('Enter the Second Number:'));
let Num3 = Number(prompt('Enter the Third Number:'));
if (Num1 > Num2 && Num1 > Num3) {
    console.log('The Largest Number is'+Num1)
} else if (Num2 > Num1 && Num2 > Num3) {
    console.log('The Largest Number is' + Num2);
} else {
    console.log('The Largest Number is' + Num3);
}

//Question5-Cjeck the user is eligible for voting on not
let userAge = Number(prompt('Enter your Age:'));
if (userAge >= 18) {
    console.log('You are Eligible for Voting')
} else {
    console.log('You are Not Eligible for Voting')
}

//Question6-Check the user is leap year or not
let year = Number(prompt('Enter the Year:'));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year+' is a leap year')
} else {
    console.log(year+' is not a leap year')
}

//Question 7-grade calculator using marks;
let marks = Number(prompt('Enter your Marks:'));
if (marks >= 90) {
    console.log('Your Grade is A+');
} else if (marks >= 80) {
    console.log('Your Grade is A');
} else if (marks >= 70) {
    console.log('Your Grade is B');
} else if (marks >= 60) {
    console.log('Your Grade is C');
} else {
    console.log('Your Grade is D');
}

//Task 1-Age Checker 'if age below 18 minor, if age between 18 and 65 adult, if age above 65 senior citizen'
let age = Number(prompt('Enter your Age:'));
if (age < 18) {
    console.log('You are a Minor')
} else if (age >= 18 && age <= 65) {
    console.log('You are an Adult');
} else {
    console.log('You are a Senior Citizen')
}

//Task 2-Login System
let username = prompt('Enter your Username:');
let password = prompt('Enter your Password:');
if (username === 'Nikhil@123' && password === 'Nikhil@007') {
    console.log('Login Successful')
} else {
    console.log('Invalid username and password')
}