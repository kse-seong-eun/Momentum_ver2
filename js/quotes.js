
const Quotes = document.querySelector("#quotes span:first-child");
const Author = document.querySelector("#quotes span:last-child");

const quotes = [
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote: "Do not try to be original, just try to be good.",
    author: "Paul Rand",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
    author: "Martin Luther King Jr.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations",
    author: "Tim O Reilly",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen",
    author: "Wayne Huizenga",
  },
  {
    quote:
      "The only thing worse than starting something and falling.. is not starting something",
    author: "SEth Godin",
  },
  {
    quote:
      "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
    author: "Jim Rohn",
  },
];

// console.log(quotes[0]); 배열의 객체 불러오기
// console.log(quotes[Math.random()]);
// console.log(quotes[Math.random() * 랜덤 돌릴 횟수])
// console.log(quotes[Math.random() * 횟수])
// ***** random()은 float(0.3423123421...)형태이므로 내림으로 정수를 만들어줌 ****
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
Quotes.innerText = todayQuote.quote;
Author.innerText = todayQuote.author;
