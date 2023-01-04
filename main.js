function addTodo(e) {
    console.log(e);
    e.preventDefault();
    const newTodoTextEl = document.getElementById("user-new-todo-input");
    const todoListEl = document.getElementById("todo-list");
    const newTodo = document.createElement("li");
    newTodo.innerText = newTodoTextEl.value;
    todoListEl.appendChild(newTodo);
    newTodo.addEventListener("click", () => {
    newTodo.style ="text-decoration: line-through;";
    });
    newTodoTextEl.value = "";
  }
  