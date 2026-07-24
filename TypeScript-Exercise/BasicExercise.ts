console.log(`TypeScript Basic Exercises and Tasks`);
//Exercise topic coverd-varibale,conditional statment, loops, funtions, array and many more
console.log('1-Variable Exercise');
console.log('Exercise 1: Create Name, Age, istudent, and print the type of each variable ')
let StudentName: String = 'Nikhil';
let StudentAge: Number = 21;
let IsStudent: Boolean = true;
console.log(`Student Name: ${StudentName}, Type: ${typeof StudentName}`);
console.log(`Student Age: ${StudentAge}, Type: ${typeof StudentAge}`);
console.log(`Is Student: ${IsStudent}, Type: ${typeof IsStudent}`);

console.log('Exercise 2-Find the square and cube of a number');
let singleNum: number = 2;
let squareNum: number = singleNum ** 2;
let cubeNum: number = singleNum ** 3;
console.log(`The square of ${singleNum} is: ${squareNum}`);
console.log(`The cube of ${singleNum} is: ${cubeNum}`);

console.log('Exercise 3-create a salary calculator program');
let BasicSalary: number =10000 ;
let Hra: number = 0.2 * BasicSalary;
let Da :number = 0.1 * BasicSalary;
let TotalSalary: number = BasicSalary + Hra + Da;
console.log(`Basic Salary: ${BasicSalary}`);
console.log(`HRA: ${Hra}`);
console.log(`DA: ${Da}`);
console.log(`Total Salary: ${TotalSalary}`);