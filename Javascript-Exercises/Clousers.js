//Clousers in javascript
console.log(`Clouser in javascript:\nA clouser is a feature in a javascript where an inner function retains access to the outer function's variable,\neven after the outer function has finished executing.`);
console.log('Counter Example with the private Variable')
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count
        },
        decrement: function () {
            count--;
            return count
        },
        reset: function () {
            count = 0;
            return count
        }
        ,
        getCount: function () {
            return count
        }
    }
}

const counter = createCounter();
console.log(counter.getCount())
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())