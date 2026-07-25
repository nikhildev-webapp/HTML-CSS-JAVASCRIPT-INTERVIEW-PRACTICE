function changeBackgroundColor() { 
    let colorCodeElement = document.getElementById("colorCode");
    let currentBg = document.body.style.backgroundColor;
        
     let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
     let fullColor = "#" + randomColor;
     document.body.style.backgroundColor = fullColor;
     colorCodeElement.textContent = fullColor;
        
   
}
