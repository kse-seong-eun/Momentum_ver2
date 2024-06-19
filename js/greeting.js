import "../style/style.scss";

const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
// const LoginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 쓴다.(중요한 변수가 아님)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(savedUserName) {
  greeting.innerText = `Hello, ${savedUserName}! 🎉`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // = "Hello " + userName; 이렇게 작성할 수도 있음
}

// saved 저장된값 가져오기
const savedUserName = localStorage.getItem(USERNAME_KEY);
// set = 저장하기
// get = 가져오기
// console.log(savedUserName);

if (savedUserName == null) {
  // show the form
  LoginForm.classList.remove(HIDDEN_CLASSNAME);
  LoginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUserName);
}
