let count = 0;
let countElement = document.getElementById('counter');
const increment = () => {
    count++;
    countElement.textContent = count;
}
const decrement = () => {
    count--;
    countElement.textContent = count;
}
const reset = () => {
    count = 0;
    countElement.textContent = count;
}