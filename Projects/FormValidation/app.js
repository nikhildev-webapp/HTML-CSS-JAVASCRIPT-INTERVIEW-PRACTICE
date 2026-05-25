const validateForm = (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errMsg = document.getElementById('err-msg');
    
    if (name === '' || email === '' || password === '' ) {
        let msg = document.createElement('p');
        msg.innerText = 'All fields are required!';
        msg.style.color = 'red';
        msg.style.fontWeight = 'bold';
        msg.style.textAlign = 'center';
        errMsg.appendChild(msg);
        return false;
    }
    errMsg.innerHTML = '';
    alert('Form submitted successfully!');
    return true
}