`============== 오늘의 개념 ================`;
// function sayInterval() {
//   console.log("interval");
// }
// function sayTimeout() {
//   console.log("Timeout");
// }
// setInterval(sayInterval, 1000);
// // 계속 반복 호출
// setTimeout(sayTimeout, 1000);
// // 한 번 만 호출

// 오늘 날짜
// new Date()
const DATE = new Date();
// 요일 [0:일]
DATE.getDay();
// 날짜 [12일]
DATE.getDate();
// 시간
DATE.getHours();
// 분
DATE.getMinutes();
// 초
DATE.getSeconds();

// padStart(2, "0");
// padEnd(10, "x");
`==========================================`;

const Clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  Clock.innerText = `${hour}:${minute}:${second}`;

  // console.log(typeof Date);
  // function
  // `=> new를 선두에 쓰고 생성자 함수를 호출하면 instance object를 반환합니다. => 이는 생성자 함수로 객체를 생성할 때 하기로 한 약속(문법)입니다. => 생성자 함수는 arguments를 받을 수 있습니다.`

  // 생성자 함수라는 좀 다른 카테고리의 함수가 있나봐요. 얘들은 단독으로 못 쓰고 새로 변수를 만들어서 여기에 지정해서 써야한다는거 같아요. |||  const 지정할변수 = new 생성자()  |||  => 태생적으로 이런 식으로 생겨먹은 애들이라고 하니 더 이상 근본적으로 파고들어봤자 이해못할거 같아서 '그런갑다'하고 받아드려~
  
  // console.log(typeof date);
  // object

  // console.log(typeof hour);
  // string
}
getClock();
setInterval(getClock, 1000);
