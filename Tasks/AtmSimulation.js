// ATM Simulation 
const prompt = require('prompt-sync')();
console.log('Welcome To The ATM Machine!')
let pin = prompt('Enter your PIN:'); 
if (pin === '1234') {
    let userOption = prompt('Choose your option:\n1 - Deposit\n2 - Cash Withdraw\n3 - Account Info\nSelect an Option:');
    
    // 1 - Deposit Option
    if (userOption === '1' || userOption.toLowerCase() === 'deposit') {
        let depositAmount = Number(prompt('Enter your amount:'));
        let confirmDeposit = prompt('Do you want to confirm your deposit? (yes/no):');
        
        if (confirmDeposit.toLowerCase() === 'yes') {
            console.log('Deposit confirmed. Deposit Amount: ' + depositAmount);
        } else {
            console.log('Thank you for using the ATM.');
        }
        
    // 2 - Cash Withdraw Option
    } else if (userOption === '2' || userOption.toLowerCase() === 'cash withdraw' || userOption.toLowerCase() === 'cashwithdraw') {
        let withdrawAmount = Number(prompt('Enter withdraw amount:'));
        let withdrawConfirm = prompt('Enter your confirmation (yes/no):');
        
        if (withdrawConfirm.toLowerCase() === 'yes') {
            console.log('Withdrawal confirmed. Amount: ' + withdrawAmount);
        } else {
            console.log('Thank you for using the ATM.');
        }
        
    // 3 - Account Info Option
    } else if (userOption === '3' || userOption.toLowerCase() === 'account info') {
        let userName = 'Nikhil';
        let accountType = 'Savings';
        let totalBalance = 10000000;
        
        console.log(`Welcome Back User!\nAccount Holder Name: ${userName}\nAccount Type: ${accountType}\nTotal Balance: ${totalBalance}`);
    } else {
        console.log('Invalid option selected.');
    }
} else {
    console.log('Incorrect PIN.');
}
