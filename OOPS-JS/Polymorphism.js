//Polymorphism in OOPs
console.log('Polymorphism:\nmeans many forms.it allows different classes to have the exact same method name but execute different behaviours.');

class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound() { 
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() { 
    console.log("Meow!");
  }
}

const pets = [new Dog(), new Cat()];
pets.forEach(pet => pet.makeSound()); 