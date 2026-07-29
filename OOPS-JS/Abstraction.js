//Abstraction in OOPs
console.log(`Abstraction:\nAbstractuionmeans hiding the complex inner working and only showing the essential feature`);

//Example-coffe machine simulation
class coffeMachine{
    #startBoiler() {
        return 'Boiling Water...'
    }
    #grindBeans() {
        return 'Grinding beans...'
    }

    makeCoffe() {
        console.log(this.#startBoiler);
        console.log(this.#grindBeans);
        console.log('Your Coffe is ready')
    }
}

const machine = new coffeMachine()
machine.makeCoffe();
