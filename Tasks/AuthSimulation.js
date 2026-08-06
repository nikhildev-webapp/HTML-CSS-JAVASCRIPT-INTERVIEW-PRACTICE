console.log('Create/Login Account')
const prompt = require('prompt-sync')();
console.log(`Choose option for login/signup in app\nif already userchose login other wise signup or guest mode for use the app`)
let userState = prompt(`1-Login\n2-Signup\n3-Guest\nChoose Option:`)
if (userState === '1') {
    let username = 'nikhil@123';
    let password = 1234;3
    let userNameInput = prompt('Enter your user name:')
    let userPasswordInput = Number(prompt('Enter your password:'));
    if (userNameInput === username && userPasswordInput === password) {
        console.log(`Welcome Back! ${userNameInput}`)
    } else {
        console.log('Please Enter correct username and password')
    }
} else if (userState === '2') {
    console.log('Create your Account:');
    let userName = prompt('Enter your username:');
    let userAge = Number(prompt('Enter your Age:'));
    let email = prompt('Enrer your email id:');
    let userPassword = Number(prompt('Create you password:'))
    let confirmAccount = prompt('Create Account(yes/no):');
    if (confirmAccount === 'Yes') {
        console.log('Account Created! Now you can use the app')
    } else {
        console.log(`Fuck You!`)
    }
} else if (userState === '3') {
    console.log('Welcome Guest!')
}
