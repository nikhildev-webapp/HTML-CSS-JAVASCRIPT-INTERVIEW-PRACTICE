// condition if-else
// question 1-take the number from user and check if it is even or odd
const prompt = require("prompt-sync")(); //its only required for node js environment to take input from user not in browser
let UserNumber = Number(prompt('Enter the Number'));
if (UserNumber % 2 === 0) {
    console.log('The Number is Even')
   
}else{
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