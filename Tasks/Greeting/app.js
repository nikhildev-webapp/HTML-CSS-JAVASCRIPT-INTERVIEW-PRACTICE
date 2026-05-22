const greet = () => {
    let userName = document.getElementById('nameInput').value;
    userName.value = '';
    alert(`Hello, ${userName}! Welcome to JavaScript!`);
}