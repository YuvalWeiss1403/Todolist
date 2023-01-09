

function addTodo(e) {
    console.log(e);
    e.preventDefault();
    const newTodoTextEl = document.getElementById("user-new-todo-input");
    const todoListEl = document.getElementById("todo-list");
    const newTodo = document.createElement("div");
    newTodo.className = "my-task";
    const checkbox = document.createElement("input");
    checkbox.className = "my-checkbox";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete task";
    checkbox.type = "checkbox";
    newTodo.innerText = newTodoTextEl.value;
    newTodo.appendChild(checkbox);
    newTodo.appendChild(deleteButton)
    todoListEl.appendChild(newTodo);
    deleteButton.addEventListener("click", () => {
      if(checkbox.checked){
        todoListEl.removeChild(newTodo);
      }else{
        alert("Not completed! please complete the task!");
      }
    });
    newTodoTextEl.value = "";
  }
  


// const taskForm = document.getElementById("add-task");
// const taskInput = document.getElementById("user-new-todo-input");
// const taskList = document.getElementById("todo-list");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// function renderTasks() {
//   console.log("renderTasks()");
//   taskList.innerHTML = "";
//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];
//     const li = document.createElement("li");
//     // {task.completed ? "checked" : ""}
//     // or {task.completed && "checked"}
//     // when we click on the checkbox => toggleCompletion(123)
//     // with the current task id (123)
//     li.innerHTML = `
//         <label>
//           <input type="checkbox" onchange="toggleCompletion(${task.id})" 
//           ${task.completed && "checked"} id="task-${task.id}">
//           ${task.text}
//         </label>
//         <button type="button" id="delete-${task.id}" 
//         onclick="deleteTask(${task.id})">Delete</button>
//       `;

//     li.className = task.completed ? "completed" : "not-completed";
//     // li.className = task.completed && "completed";
//     taskList.appendChild(li);
//   }
// }


// // Add a new task to the local storage list
// function addTask(event) {
//   event.preventDefault();
//   console.log(Date.now(), "Date.now()");
//   const task = {
//     id: Date.now(),
//     text: taskInput.value,
//     completed: false,
//   };
//   tasks.push(task);
//   // tasks = [{id: 1223432432,
//   // text: "Drink",
//   // completed: false}]
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   taskInput.value = "";
//   renderTasks();
// }


// // Toggle a task's completion status
// function toggleCompletion(id) {
//   for (let i = 0; i < tasks.length; i++) {
//     tasks[id]; 
//     const currentTask = tasks[i];
//     if (currentTask.id === id) {
//       currentTask.completed = !currentTask.completed; 
//     }
//   }
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   renderTasks();
// }


// // Delete a task from the list
// function deleteTask(id) {
//   const taskIndex = tasks.findIndex(function (task) {
//     return task.id === id;
//   });
//   if (taskIndex !== -1 && tasks[taskIndex].completed) {
//     tasks.splice(taskIndex, 1);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     renderTasks();
//   } else {
//     alert("Not Completed, please complete the task!");
//   }
// }



// // Event listeners
// // when we click on the submit button => addTask()
// taskForm.addEventListener("submit", addTask);
// // הפעלה של הפונקציה כשהדף עולה
// renderTasks();
