//Function Exercise
//Exercise 1-Create addition Function
function add(num1, num2) {
    return num1+num2
}
console.log(add(22, 33))

//Exercise2-Function to check odd or even
function CheckNumber(n) {
    if (n % 2 === 0) {
        console.log(`The ${n} is Even`)
    } else {
        console.log(`The ${n} is Odd`)
    }
    
}
console.log(CheckNumber(2))

//Exercise 3-Function to check largest number
//If else approach:
function checkLargest(x, y, z) {
    if (x >= y && x >= z) {
        console.log('The largest Number is:'+x)
    } else if (y >= x && y >= z) {
        console.log('The largest Number is:'+y);
    } else {
        console.log('The largest Number is:' + z);
    }
}
console.log(checkLargest(1, 2, 4));

//alternative apporach
function checkLargestNumber(numbers) {
    const largest = Math.max(...numbers)
    return 'The largest Number is:'+largest
}

console.log(checkLargestNumber([1, 2, 8, 4]));

//Exercise 4-Function with parameter
function paramaterFunction(Name) {
    console.log(`Hello Mr:${Name}`)
}
paramaterFunction('Nikhil');

//Execise 5-Create a arrow functions of subtraction,multiplication,division,square and cube
const sub = (num1,num2) => {
    return console.log(num1 - num2); 
}
sub(3, 3);

const multi = (num1,num2) => {
    return console.log(num1*num2)
}
multi(3, 4);

const divi = (num1,num2) => {
    return console.log(num1/num2)
}
divi(2, 4);

const square = (n) => {
    return console.log(n**2);
}
square(6)

const cube = (n) => {
    return console.log(n**3)
}
cube(3);

//Task1- Create BMI Calculator Function
const bmiCalculate = (weight, height) => {
    let heightInMeter=height/100
    let bmi = weight / heightInMeter**2;
    if (bmi <= 18.5) {
        console.log('You are underweight')
    } else if (bmi > 18.5 && bmi <= 24.9) {
        console.log('You are Healthy Weight')
    } else if (bmi > 25.0 && bmi <= 29.9) {
        console.log('You are overweight');
    } else {
        console.log('You are obese');
    }
    
}
bmiCalculate(70, 175)

//Task 2- Create a Temperature convert celsuis to fahernheit
const convertCelsiusToF = (n) => {
    return (n * 9 / 5) + 32;
}
let temp = convertCelsiusToF(50);
console.log('Current temprature in Fahrenheit'+' '+temp)