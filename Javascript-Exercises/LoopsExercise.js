//Loops -for,while,do while
// Exercise 1-Print 1-10 numbers
console.log('Printing the number between 1-10');

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Exercise 2-print even numbers 1-20
console.log('Printing the Even Number Between 1-20');
for (let i = 1; i <= 20; i++){
    
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Exercise 3-Print odd numbers
console.log('Printing the Odd Number Between 1-20');
for (let i = 1; i <= 20; i++){
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//Exercise 4-sum of number 1-100
console.log('Sum of number 1-100');
let SumOf=0;
for (let i = 1; i <= 100; i++) {
     SumOf+=i
}
console.log(SumOf);

//Exercise 5-Multiplication Table
console.log('Print the Table of 3')
let Number = 3
let i=1
while (i <= 10) {
    let pr = i * Number;
    console.log(`${Number}*${i}=${pr}`)
    i++;
}

//Exercise 6-Reverse counting 10-1
console.log('Reverse Counting from 10-1');
for (let i = 10; i >= 1; i--){
    console.log(i)
}

//Exercise 7-Factorial of any number
console.log('Factorial of Number 5');
function checkFactrial(n) {
    if (n < 0) return 'Enter the positive number'
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result
}
console.log(checkFactrial(5))

//Exercise 8=fibonacci series
console.log('Fibonaaci series');
function genreateFib(term) {
    if (term <= 0) return [];
    if (term === 1) return[0];
    let series=[0,1] ;
    for (let i = 2; i < term; i++){
        let nextNum = series[i - 1] + series[i - 2];
        series.push(nextNum)
    }
    return series
}

console.log(genreateFib(5))

//Exercise 9-Prime Number Check
console.log('Prime Number Checker');
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const boundary = Math.sqrt(n);
    for (let i = 3; i <= boundary; i += 2){
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(4))

//Exercise 10-reverse a number
function reverseNumber(n) {
    let orignal = Math.abs(n);
    let reverse = 0;
    while (orignal > 0) {
        const lastDigit = orignal % 10;
        reverse = (reverse * 10) + lastDigit;
        orignal = Math.floor(orignal / 10);
    }
    return reverse*Math.sign(n)
}
console.log(reverseNumber(12345678))