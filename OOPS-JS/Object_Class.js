//Object and Class in OOps
console.log('Class: A blueprint or a recipe. it defines what properties and actions somethig will have but it isn"t actual thing.');
console.log(`Object:The actual item built from that blueprint`);

// Example-car factory the 'class' is factory blueprint for a car. The 'Object' is the physical car that rolls off the assembly line.
class Car{
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    drive() {
        console.log(`${this.brand} goes voom!`)
    }
}

const myCar = new Car('Toyata', 'Black');
console.log(myCar);
const myFreindCar = new Car('Tesla', 'grey');
console.log(myFreindCar);

myCar.drive();
myFreindCar.drive();