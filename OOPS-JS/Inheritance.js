//Inheritance in OOps
console.log(`Inheritance:\nIt allows a new class to adopt properties and methods from an exiting class.\nIt prevents you from writing the exact same code over and over`);

//Example-Animal class for all animals e.g-dog cat etc..
class Animal{
    constructor(name) {
        this.name = name;
    }
    //name
    Petname() {
        console.log(`My pet name is :${this.name}`)
    }
    //eat
    eat() {
        console.log(`${this.name} is eating.`)
    }

}

class Dog extends Animal{
    bark() {
        console.log('Bow Bow')
    }
}
const myDog = new Dog('Bruno');
myDog.Petname();
myDog.eat();

class Cat extends Animal{
    meow() {
        console.log('Meow Meow')
    }
}
const myCat = new Cat('SnowBell');
myCat.Petname()
myCat.meow()