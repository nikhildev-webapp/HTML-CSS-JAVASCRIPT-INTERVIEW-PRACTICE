// Learn javascript fundamentals and practice it
// Variableslet,var,const
let SuperName = 'jhone doe';
console.log(SuperName);
var SuperAge = 25;
console.log(SuperAge);
const SuperPower = 'Invisibility';
console.log(SuperPower);

// Data types
// 1-string
let ClebName = 'Dokota jhonsone';
console.log(`String:${ClebName}`);
// 2-Number
let CelbAge = 30;
console.log(`Number:${CelbAge}`)
// 3-Boolean
let isMarried = false;
console.log(`Boolean:${isMarried}`);
// 4-Null
let job = null;
console.log(`Null:${job}`);
// 5-Undefined
let address;
console.log(`Undefined:${address}`);
// 6-Object
let HarryPotter = {
    name: 'Harry Potter',
    age: 20,
    isWizard: true,
}
console.log('Object Output:'+JSON.stringify(HarryPotter));

// If-else statement
let dragoneWarrior='Ice Dragon';
if (dragoneWarrior === 'Fire Dragon') {
    console.log('The Fire Dragon is strong and fierce!');
} else if (dragoneWarrior === 'Ice Dragon') {
    console.log('The Ice Dragon is cold and powerful!');
} else {
    console.log('Unknown dragon type!');
}

// Loops
// For loop
console.log('For Loop:');
for (let i = 0; i < 5;i++){
    console.log(`Iteration ${i}`);
}
//while loop
console.log('While Loop:');
let count = 1;
while (count < 5) {
    console.log(count);
    count++;
}
//do while loop
console.log('Do-While Loop:');
let num = 1;    
do {
    console.log(num);
    num++;
} while (num > 5);
//forEach loop
console.log('ForEach Loop:');
const number = [1, 2, 3, 4, 5, 6, 7];
number.forEach((num) => {
    console.log(num);
});
//for of loop
console.log('For-Of Loop:');
const colors = ['Red', 'Green', 'Blue'];    
for (const color of colors) {
    console.log(color);
}

//functions
// normal function
function hello(name) {
    return `Hello, ${name}!`;
}
console.log(hello('Alice'));

//arrow function
const helloUser = () => {
    return 'Hello User'
}
console.log(helloUser());

//Array and Methods
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Array Output:' + fruits);
fruits.push('orange');
console.log('After push:' + fruits);
fruits.pop();
console.log('After pop:' + fruits);
fruits.unshift('Mango');
console.log('After unshift:' + fruits);
fruits.shift();
console.log('After shift:' + fruits);
fruits.splice(1, 0, 'Grapes');
console.log('After splice:' + fruits);
fruits.sort();
console.log('After sort:' + fruits);
fruits.reverse();
console.log('After reverse:' + fruits);
fruits.indexOf('Banana');
console.log('Index of Banana:' + fruits.indexOf('Banana'));
fruits.includes('Cherry');
console.log('Includes Cherry:' + fruits.includes('Cherry'));
console.log('Fruits List ')
fruits.map((fruit) => {
    console.log(`${fruit}`);
})

//DOM Manipualtion-seltecing elements
const heading = document.getElementById('heading');
console.log('Heading Element:' + heading.innerText);
heading.innerText = 'Welcome to DOM Manipulation';
heading.style.color = 'blue';
heading.style.fontSize = '24px';
console.log('Updated Heading Element:' + heading.innerText);

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    alert('Button Clicked!');
});

const headingBtn = document.getElementById('headingBtn');
headingBtn.addEventListener('click', () => {
    heading.innerText = 'Heading Changed!';
    heading.style.color = 'red';
});

const para = document.createElement('p');
para.innerText = 'This is a new paragraph added to the DOM.';
document.body.appendChild(para);

const paraBtn = document.getElementById('paraBtn');
paraBtn.innerText = 'Change Paragraph';
paraBtn.addEventListener('click', () => {
    para.innerText = 'DOM Manipulation is fun!';
    para.style.color = 'green';
    para.style.fontSize = '18px';
});