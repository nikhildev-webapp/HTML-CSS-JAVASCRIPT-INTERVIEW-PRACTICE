//Encapsulation in OOPs
console.log(`Encapsulation:\nEncapsulation means packing data and method together inside an object and restricting direct access to the sensitive parts.`);

//Example -Back account simulation
class BankAccount{
    #balance = 0;
    //deposite amount
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}`)
        }
    }
    //withdraw amount
    withdraw(amount) {
        this.#balance -= amount;
        console.log(`Withdraw Amount:$${amount}`)
    }

    //checkbalance
    checkBalance() {
        console.log(`Current Balance: $${this.#balance}`)
    }
}

const myAccount = new BankAccount();
myAccount.deposit(10000)
myAccount.withdraw(400)
myAccount.deposit(300);
myAccount.checkBalance()