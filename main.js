import "./style/style.scss";

const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const LoginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
// string만 포함된 변수는 대문자로 쓴다.(중요한 변수가 아님)
const HIDDEN_CLASSNAME = "hidden";

function onLoginLoginSubmit(event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = LoginInput.value;
  greeting.innerText = `Hello ${userName}`;
  // = "Hello " + userName; 이렇게 작성할 수도 있음
  LoginForm.classList.add(HIDDEN_CLASSNAME);
}

LoginForm.addEventListener("submit", onLoginLoginSubmit);
