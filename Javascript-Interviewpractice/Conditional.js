//If-else exercise
const prompt = require("prompt-sync")();

//Exercise-1 check whether a character is a vowel
let user_char = prompt('Enter a character:');
if (user_char === 'a' || user_char === 'e' || user_char === 'i' || user_char === 'o' || user_char === 'u') {
    console.log(user_char + ' is a vowel');
} else {
    console.log(user_char + ' is not a vowel');
}

//Exercise-2 check the number is divisible by both 3 and 5;
let user_num = parseInt(prompt('Enter a number:'));
if (user_num % 3 === 0 && user_num % 5 === 0) {
    console.log(user_num + ' is divisible by both 3 and 5');
} else {
    console.log(user_num + ' is not divisible by both 3 and 5');
}

//Exercise-3 electricity bill calculation
let units = parseInt(prompt('Enter the number of units consumed:'));
let bill_amount;
if (units <= 100) {
    bill_amount = units * 1.2;
} else if (units <= 200) { 
    bill_amount = 100 * 1.2 + (units - 100) * 2;
} else {
    bill_amount = 100 * 1.2 + 100 * 2 + (units - 200) * 3;
}
console.log('The electricity bill amount is: ' + bill_amount);

//Exercise-4 salary bonus calculation
let salary = parseFloat(prompt('Enter the salary:'));
let bonus;
if (salary < 5000) {
    bonus = salary * 0.1;
}else if (salary <= 10000) {
    bonus = salary * 0.05;
} else {
    bonus = salary * 0.02;
}
console.log('The salary bonus is: ' + bonus);

//Exercise-5 income tax calculation
let income = parseFloat(prompt('Enter the income:'));
let tax;    
if (income <= 250000) {
    tax = 0;
}else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
} else {
    tax = (income - 500000) * 0.1;
}
console.log('The income tax is: ' + tax);

//Exercise-6 check whether a year is a leap year or century year
let year = parseInt(prompt('Enter a year:'));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + ' is a leap year');
}else if (year % 100 === 0 && year % 400 !== 0) {
    console.log(year + ' is a century year but not a leap year');
}else {
    console.log(year + ' is not a leap year');
}

//Exercise-7 BMI calculation
let weight = parseFloat(prompt('Enter the weight in kg:'));
let height = parseFloat(prompt('Enter the height in meters:'));
let bmi = weight / (height * height);
if (bmi <= 18.5) {
    console.log('Underweight');
}else if (bmi <= 24.9) {
    console.log('Normal weight');
}else {
    console.log('Overweight');
}

//Exercise-8 Age category classification
let age = parseInt(prompt('Enter the age:'));
if (age <= 13) {
    console.log('Child');
}else if (age <= 19) {
    console.log('Teenager');
}else {
    console.log('Adult');
}

//Exercise-9 Login Validation
let username = prompt('Enter the username:');
let password = prompt('Enter the password:');
if (username === 'admin' && password === 'password123') {
    console.log('Login successful');
}else {
    console.log('Login failed');
}

//Exercise-10 ATM withdrawal simulation
let account_balance = 1000;
let withdrawal_amount = parseFloat(prompt('Enter the withdrawal amount:'));     
if (withdrawal_amount <= account_balance) {
    account_balance -= withdrawal_amount;
    console.log('Withdrawal successful. Remaining balance: ' + account_balance);
} else {
    console.log('Insufficient funds');
}

//Exercise-11 Discount calculation
let purchase_amount = parseFloat(prompt('Enter the purchase amount:'));
let discount;
if (purchase_amount <= 1000) {
    discount = purchase_amount * 0.1;
} else if (purchase_amount <= 5000) {
    discount = purchase_amount * 0.2;
} else {
    discount = purchase_amount * 0.3;
}
console.log('The discount is: ' + discount);

//Exercise-12 shopping bill calculation
let item_price = parseFloat(prompt('Enter the item price:'));
let quantity = parseInt(prompt('Enter the quantity:'));
let total_amount = item_price * quantity;   
if (total_amount >= 5000) {
    total_amount -= total_amount * 0.1;
}else if (total_amount >= 2000) {
    total_amount -= total_amount * 0.05;
}
console.log('The total amount is: ' + total_amount);

//Exercise-13  Movie Ticket Price Calculation
let age_for_ticket = parseInt(prompt('Enter the age for ticket price calculation:'));
let ticket_price;
if (age_for_ticket <= 12) {
   ticket_price = 5;
   console.log('Ticket price is: ' + ticket_price);
} else if (age_for_ticket <= 60) {
    ticket_price = 10;
    console.log('Ticket price is: ' + ticket_price);
} else {
    ticket_price = 7;
    console.log('Ticket price is: ' + ticket_price);
}
