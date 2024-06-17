const TodoForm = document.getElementById("todo-form");
const TodoInput = TodoForm.querySelector("input");
const TodoList = document.getElementById("todo-list");

const TODOS_KEY = "todos📝";
// 🔥로컬스토리지에 Todos배열 값들이 변경될 수 있도록 const가 아닌 let으로 명명
let Todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(Todos));
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = TodoInput.value;
  // console.log(newTodo, "😃");
  TodoInput.value = "";
  // console.log(newTodo, TodoInput.value);
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  Todos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newTodo) {
  console.log(newTodo, "paint");
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deletTodo);
  li.appendChild(span);
  li.appendChild(button);
  TodoList.appendChild(li);
}

function deletTodo(event) {
  console.log(event.target.parentElement, "delet");
  const removeli = event.target.parentElement;
  removeli.remove();
  console.log(typeof removeli.id, "delet typeof");
  Todos = Todos.filter((Todo) => Todo.id !== parseInt(removeli.id));
  saveToDos();
}

TodoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // 🔥로컬스토리지에 Todos배열 값들이 들어있으면 Todos에 parsedToDos를 넣어서 전의 값들을 복원!!!
  Todos = parsedToDos;
  // parsedToDos.forEach((item) => console.log("hi!", item));
  parsedToDos.forEach(paintToDo);
}
