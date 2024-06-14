const TodoForm = document.getElementById("todo-form");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.getElementById("todo-list");

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = TodoInput.value;
  // console.log(newTodo, "😃");
  TodoInput.value = "";
  // console.log(newTodo, TodoInput.value);
  paintToDo(newTodo);
}

function paintToDo(newTodo) {
  console.log(newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deletTodo);

  li.appendChild(span);
  li.appendChild(button);
  TodoList.appendChild(li);
}

function deletTodo(event) {
  console.log(event.target.parentElement);
  // console.dir(event);
}
TodoForm.addEventListener("submit", onTodoSubmit);
