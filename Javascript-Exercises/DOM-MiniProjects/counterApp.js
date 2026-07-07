let count = 0;
let countValue = document.getElementById('countValue');

const inc = () => {
    count++
    countValue.innerText=count
}

const dec = () => {
    count--;
    countValue.innerText=count
}

const rese = () => {
    count = 0;
    countValue.innerText=count
}