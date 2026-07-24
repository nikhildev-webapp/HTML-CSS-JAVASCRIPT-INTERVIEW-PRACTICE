//TypeScript Introduction 
console.log('TypeScript Introduction:');
console.log('TypeScript is a superset of JavaScript that adds static typing and other features to the language. It allows developers to catch errors at compile time and provides better tooling support for large codebases. TypeScript code is transpiled to JavaScript, which can run in any environment that supports JavaScript.');
//Exercise1-Create a varibale and assign a value to it.
let UserName = 'Nikhil';
let UserAge = 21;
console.log(`Hi My name is:${UserName} and \nI am ${UserAge} year old.`);
//Exercise2-create a variable and store your fav color in it.
let FavColor = 'Black';
console.log(`My favourite color is:${FavColor}`);
//Exercise3-Create a varibale for city, country and salary
let City = 'Delhi';
let Country = 'India';
let Salary = 500000;
console.log(`My name is ${UserName}\nI am from ${City},${Country} \nand my salary is ${Salary}`);
//Exercise4-Swap two variable without using third variable.
let a = 10;
let b = 20;
console.log(`Before swapping: a=${a}, b=${b}`);
number: [a, b] = [b, a];
console.log(`After swapping: a=${a}, b=${b}`);
//Exercise5-Caluclating the area and perimeter of rectangle.
let len = Number(prompt('Enter the length of rectangle:'));
let wid = Number(prompt('Enter the width of rectangle:'));
let area = len * wid;
let perimeter = 2 * (len + wid);
console.log(`The are of rectangle is:${area}.\nThe perimeter of rectangle is:${perimeter}.`);
//Exercise6-Find the square and cube of a number.
let userNum = Number(prompt('Enter a number:'));
let square = userNum ** 2;
console.log(`The square of ${userNum} is:${square}.`);
let cube = userNum ** 3;
console.log(`The cube of ${userNum} is:${cube}.`);
//Task1-Create a Student Information program
let studentName = 'Nikhil';
let studentAge = 16;
let studentGrade = 'A';
let isPassed = true;
console.log(`Student Name: ${studentName}\nStudent Age: ${studentAge}\nStudent Grade: ${studentGrade}\nPassed: ${isPassed}`);
//Task2-Create a salary calculator program
let basicSalary = 10000;
let hra = 0.2 * basicSalary;
let da = 0.1 * basicSalary;
let totalSalary = basicSalary + hra + da;
console.log(`Basic Salary: ${basicSalary}\nHRA: ${hra}\nDA: ${da}\nTotal Salary: ${totalSalary}`);
export {};
