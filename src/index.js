// Query the elements
const btnAdd = document.getElementById("btnAdd");
const todoInput = document.querySelector("input");
const todoList = document.querySelector("ul");

const todosArray = [];

load();
function load() {
  let todos = localStorage.getItem("todos");
  if (todos) {
    todos = todos.split(",");
    todos.forEach(function (todo) {
      addElement(todosArray, todo, todoList);
    });
  }
}

// Add event listener
btnAdd.addEventListener("click", addTodo);

// Add event handler
function addTodo(event) {
  /**
   * Get a ref of the input's text
   * Create a <li> element
   * Add that text into a <li> element
   * Append that <li> element to te <ul> element
   * **/

  // 1.
  const todo = todoInput.value; // Learn JavaScript

  //   if (todo !== "") {
  if (todo) {
    addElement(todosArray, todo, todoList);

    // 5. Empty the input value
    todoInput.value = "";

    // 6. Save to localstorage
    localStorage.setItem("todos", todosArray);
  }
}

function addElement(todos, todo, todoList) {
  todos.push(todo);
  const li = document.createElement("li"); // <li></li>
  li.innerText = todo; // <li>Learn JavaScript</li>
  todoList.appendChild(li);
}

// function deleteTodo() {}
// function toggle() {}
