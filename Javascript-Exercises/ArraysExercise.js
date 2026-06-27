// Array Exercise and methods
//Exercise 1-Create a array of fruits and find the length
let fruitsArray = ['Apple', 'Mango', 'Green Apple', 'Cherry'];
console.log(`Length of Fruits Array is ${fruitsArray.length}`);

//Exercise 2-create an array and add the item using push method use the same fruit array
fruitsArray.push('Guvava');
console.log(`Adding the new fruits in the array using the 'push method' :${fruitsArray}`);

//Exercise 3-remove the item from fruits array using the pop method
fruitsArray.pop();
console.log(`Fruit array after removing the element from it using the 'Pop method' :${fruitsArray}`);

//Exercise 4-Loop through fruits array
console.log('Loop through array');
for (let i = 1; i <= fruitsArray.length; i++){
    console.log(fruitsArray[i]);
};

//Exercise 5-create a number array and find the largest and lowest number in array
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 200];
let largestNumber = Math.max(...numberArray);
console.log(`Largest Number from the array is :${largestNumber}`);
let smallestNumber = Math.min(...numberArray);
console.log(`Smallest Number in array is :${smallestNumber}`);

//Exercise 6-Reverse the number array
let revArray = numberArray.reverse();
console.log(revArray)

//Exercise 7-Create a number array and sort them 
let shuffeldArray = [1, 4, 6, 8, 10, 2, 3, 5, 7, 9];
console.log(`Shuffled Array ${shuffeldArray}`)
let sortArray = [...shuffeldArray].sort((a,b)=>a-b);
console.log(`Sorted Array ${sortArray}`);

//Exercise 8-Create an array and remove the duplicate items
let dupArray = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10, 10];
console.log('Duplicate Array',dupArray)
let setArray = [...new Set(dupArray)]
console.log(setArray);

//Exercise 9-find the sum of number array using forEach
let sum = 0;
numberArray.forEach(num => {
    sum+=num
})
console.log(`Sum of number array is :${sum}`);

// Task 1-Create a student marks array and find the Total, Average, highest and lowest marks from array
let studentArray = [22, 33, 44, 55, 77, 55, 88, 99, 100];
console.log(`Student Marks Array;${studentArray}`);
//total
let totalStudentMarks = studentArray.reduce((i, x) => {
    return i + x;
})
console.log(`Total Marks ${totalStudentMarks}`);

//average
let avg = 0;
studentArray.forEach((n,i) => {
    let total = n + i;
    avg+=total/studentArray.length
})
console.log(`The average marks of  the class is ${avg}`);

//highest
let highestMarks = Math.max(...studentArray);
console.log(`Highest Marks in the class is ${highestMarks}`)

//lowest
let lowestMarks = Math.min(...studentArray);
console.log(`The lowest mark in the class is ${lowestMarks}`);
