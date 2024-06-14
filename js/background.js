const imges = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

const RandomImg = imges[Math.floor(Math.random() * imges.length)];
// console.log(RandomImg);

const BackGround = document.createElement("img");
// console.log(BackGround);
// Elements탭에서는 보이지 않지만 콘솔로 찍으면 <img>나옴
BackGround.src = `img/${RandomImg}`;

document.body.appendChild(BackGround);
