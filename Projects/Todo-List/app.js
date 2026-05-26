let saveTodo = document.getElementById("saveTodo");
saveTodo.addEventListener("click", function () {
    let todoInput = document.getElementById("todo");
    let todoText = todoInput.value.trim();

    if (todoText === "") {
       alert("Please enter a todo item.");
       return;
    } 
        let todoList = document.getElementById("todoList");
        let listItem = document.createElement("li");
        let deleteButton = document.createElement("button");
        
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteBtn";
        
        listItem.textContent = todoText;
        listItem.className = "todoStyle";
        todoList.appendChild(listItem);
        
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
            
        });
        listItem.appendChild(deleteButton);
        todoInput.value = "";


})