//loops-interview practice
//Exercise-1 print number from 1-10
console.log('Exercise-1 print number from 1-10');
for (let i = 1; i <= 10; i++){
    console.log(i)
}

//Exercise-2 print the odd number and even number from 1-10
console.log('print odd and even number from 1-100');
let oddNumber = [];
let evenNumber = []
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        evenNumber.push(i)
    } else {
        oddNumber.push(i)
    }
}
console.log('Even number from 1-100',evenNumber)
console.log('Odd number from 1-100', oddNumber)

//Exercise-3 find the sum of number from 1-10
console.log('Exercise-3 find the sum of 1-10 number')
let sumOfNumber = 0;
for (let i = 1; i <= 100; i++){
    sumOfNumber+=i
}
console.log('Sum of numbers from 1-10:', sumOfNumber);

//Exercise-4 find the product of numbers from 1-100
console.log('Exercsise-4 find the product of number from 1-100');
let productOfNumber=1;
for (let i = 1; i <= 100; i++){
    productOfNumber *= i;
}
console.log('Product of 1-100 number is:', productOfNumber);

//Exercise-5 print tables from 1-10
console.log('Printt Table from 1-10')
for (let i = 1; i <= 10; i++){
    console.log(`--Table of ${i}---`)
    for (let j = 1; j <= 10; j++){
        console.log(`${i}*${j}=${i*j}`)
    }
    console.log('')
}

//Exercise-6 reverse the number or check is palindrome or not
console.log('Exercise-6 reverse the number');
let orgNumber = '123456';
let reverseNumber = '';
for (let i = orgNumber.length-1; i >= 0; i--){
    reverseNumber +=orgNumber[i]
}
console.log('Orignal number is:',orgNumber)
console.log('Reverse Number is:',reverseNumber);
if (orgNumber === reverseNumber) {
    console.log('The number is Palindrome.')
} else {
    console.log('The number is not palindrome');
}

//Exercise-7 print the prime number between 1-100
console.log('Exercise-7 print the prime number from 1-100')
const primesArray = [];

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primesArray.push(num);
    }
}
console.log('prime number array', primesArray); 

//Exercise-8 print the triangle pattern
console.log('Exercise-6 print the star patter')
//simple triangle
for (let i = 1; i <= 5; i++){
    let row=''
    for (let j = 1; j <= i; j++){
        row += '*';
    }
    console.log(row)
}
//reverse triangle
console.log('Reverse triangle')
for (let i = 5; i >= 1; i--){
    let rowRev = '';
    for (let j = 1; j <= i; j++){
        rowRev+='*'
    }
    console.log(rowRev)
}