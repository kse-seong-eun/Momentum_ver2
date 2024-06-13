const Clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  Clock.innerText = `${hour}:${minute}:${second}`;

  // console.log(typeof Date);
  // function

  // console.log(typeof date);
  // object

  // console.log(typeof hour);
  // string
}
getClock();
setInterval(getClock, 1000);
