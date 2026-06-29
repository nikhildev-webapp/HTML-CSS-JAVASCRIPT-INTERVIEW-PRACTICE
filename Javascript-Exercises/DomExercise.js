//DOM Exercise
//Exercise 1-change the text on button click
let heading3 = document.getElementById('text1');
let btnText = document.getElementById('btnText');

btnText.addEventListener('click', () => {
  if (heading3.innerText === 'You clicked the button') {
    heading3.innerText = 'Clicked the button to change text'; 
  } else {
    heading3.innerText = 'You clicked the button';
  }
});

//Exercise 2-Change the background color
let body = document.body;
let bgChanger = document.getElementById('bgChanger');

bgChanger.addEventListener('click', () => {
    if (body.classList.contains('bgColor')) {
        body.classList.remove('bgColor');
        body.classList.add('orgBg')
    } else {
        body.classList.add('bgColor');
        body.classList.remove('orgBg')
    }
})

//Exercise4-Show the current time
let TimeBtn = document.getElementById('TimeBtn');
let time = document.getElementById('time');
TimeBtn.addEventListener('click', () => {
    let timeBox = document.createElement('p');
    const now=new Date()
    const timeStamp = now.toLocaleTimeString();
    timeBox.innerText = `${timeStamp}`
    time.appendChild(timeBox)
})

//Exercise 5-Show/Hide password toggle button
let inputPassword = document.getElementById('password');
let togglePass = document.getElementById('togglePass');

togglePass.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
        togglePass.innerText='Hide'
    } else {
        inputPassword.type = 'password';
        togglePass.innerText = 'Show';
    }
})