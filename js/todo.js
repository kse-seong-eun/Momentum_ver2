const TodoForm = document.getElementById("todo-form");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.getElementById("todo-list");

const TODOS_KEY = "todos📝";

const Todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = TodoInput.value;
  // console.log(newTodo, "😃");
  TodoInput.value = "";
  // console.log(newTodo, TodoInput.value);
  Todos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
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
  const removeli = event.target.parentElement;
  removeli.remove();
}

TodoForm.addEventListener("submit", onTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  parsedToDos.forEach((item)=>console.log("hi!",item));
}
