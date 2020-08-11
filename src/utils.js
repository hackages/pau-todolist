const span = document.querySelector("span");
const todoList = document.querySelector(".todos");

function renderTodos(collection) {
  span.innerHTML = collection.length;
  todoList.innerHTML = "";
  for (const item of collection) {
    todoList.innerHTML += `
    	<li>
	      ${item.label}
        <button type="button" data-todo='${JSON.stringify(item)}'>
          Delete
        </button>
      </li>
     `;
  }
}
