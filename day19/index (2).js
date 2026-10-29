// DAY 16 비동기처리
// console.log("index.js가 연결됐습니다!!!");

// // 비동기 : 기다리지 않고 실행되는 다음줄
// console.log("이미지 로딩 시작");
// setTimeout(() => console.log("이미지 로딩 완료"), 2000);
// console.log("다른 작업 수행");

// // clearTimeout(timerId) timer 취소
// const setBtn = document.querySelector("#set-btn");
// const cancelBtn = document.querySelector("#cancel-btn");
// const msgEl = document.querySelector("#msg");
// let timeoutId = null;

// setBtn.addEventListener("click", () => {
//   msgEl.textContent = "3초 뒤에 알려 드립니다";
//   timeoutId = setTimeout(() => {
//     msgEl.textContent = "3초가 지났습니다";
//   }, 3000);
// });

// cancelBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   msgEl.textContent = "알림을 취소했습니다";
// });

// // setInterval - 정해진 시간마다 되풀이
// let count = 0;
// const intervalId = setInterval(() => {
//   count += 1;
//   console.log(`${count}초`);
//   if (count == 5) {
//     clearInterval(intervalId);
//     console.log("멈춤");
//   }
// }, 1000);

// // 콜백함수
// function sayHello(name, callback) {
//   console.log(`안녕 ${name}`);
//   callback();
// }

// sayHello("태민", () => console.log("콜백 실행"));

// // Promise
// const order = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve("아메리카노가 나왔습니다"), 2000);
//   setTimeout(() => reject("재고가 없습니다"), 2000);
// });
// console.log(order);
// order
//   .then((message) => {
//     console.log(message);
//     console.log(order);
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(order);
//   });

// async await : Promise가 끝나야 다음줄 실행
// function wait(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function makeCoffee() {
//   console.log("주문");
//   await wait(1000);
//   console.log("1초 - 원두 갈기");
//   await wait(1000);
//   console.log("2초 - 커피 완성");
// }

// makeCoffee();

// // try catch 오류 처리
// async function fetchWithError() {
//   try {
//     console.log("데이터 패치 시작");
//     await new Promise((resolve, reject) => {
//       setTimeout(() => reject("에러 발생"), 1000);
//     });
//   } catch (err) {
//     console.log("에러 : ", err);
//   } finally {
//     console.log("데이터 패치 종료");
//   }
// }



// const x = 1;

// function outer() {
//   const x = 10;
//   const inner = function () {
//     console.log(x);
//   };
//   return inner;
// }

// const innerFunc = outer();
// innerFunc();

// // this의 쓰임 : function과 arrow function

// const timer = {
//   secondes: 3,
//   start() {
//     setTimeout(function () {
//       console.log("function :", this.secondes);
//     }, 0);
//     setTimeout(() => {
//       console.log("화살표 :", this.secondes);
//     }, 0);
//   },
// };
// timer.start();




// // // this의 쓰임 : 이벤트 리스너의 this
// // const likeBtn = document.querySelector("#like-btn");

// // likeBtn.addEventListener("click", function () {
// //   this.textContent = "눌렀어요";
// //   console.log("function :", this);
// // });

// // likeBtn.addEventListener("click", () => {
// //   console.log(this);
// //   console.log("화살표 :", this === window);
// // });

// // 기본객체 Math
// console.log(Math.round(4.5)); // 반올림
// console.log(Math.floor(4.7)); // 내림
// console.log(Math.ceil(4.2)); // 올림
// console.log(Math.max(72, 95, 58)); // 가장 큰 수
// console.log(Math.min(72, 95, 58)); // 가장 작은 수
// console.log(Math.abs(-3)); // 절댓값
// console.log(Math.PI);
// console.log(Math.random());

// // 기본객체 Date
// const day = new Date();
// console.log(day.getFullYear()); // 연도
// console.log(day.getMonth() + 1); // 월 0부터 시작
// console.log(day.getDate()); // 일
// console.log(day.getDay()); // 요일 [0,1,2,3,4,5,6] 일,월,화...토
// console.log(day.getHours()); // 시간

// // Higer Order Function 고차함수
// // const addFunction = (a) => {
// //   let first = a;
// //   return (b) => {
// //     let second = b;
// //     return a + b;
// //   };
// // };

// const add = (a) => (b) => a + b;
// const add5 = add(5);

// console.log(add5);
// console.log(add5(10));

// function makeMultiple(n) {
//   return function (x) {
//     return x * n;
//   };
// }
// const double = makeMultiple(2);
// const triple = makeMultiple(3);
// console.log(double(4), triple(4));

// // for와 메서드 이어쓰기
// const scores = [72, 95, 58, 88, 64];

// // 반복문 - 어떻게 할지를 한단계씩
// let total = 0;
// for (let i = 0; i < scores.length; i++) {
//   const score = scores[i];
//   if (score >= 60) total += score;
// }
// console.log("for :", total);

// // method 이어쓰기 - 무엇을 할지를 차례로
// const total2 = scores
//   .filter((score) => score >= 60)
//   .reduce((acc, score) => acc + score, 0);
// console.log("method :", total2);


// const place = "바깥";

// function printPlace() {
//   console.log(place);
// }

// function visit() {
//   const place = "visit 안";
//   printPlace();
//   console.log(place);
// }

// visit();
// console.log(place);

// if (true) {
//   var food = "김밥";
//   let drink = "물";
// }
// console.log(food);


// //

// function createCounter() {
//   let count = 0;
//   return {
//     increase() {
//       count += 1;
//       return count;
//     },
//     decrease() {
//       count -= 1;
//       return count;
//     },
//   };
// }

// const a = createCounter();
// const b = createCounter();

// a.increase();
// a.increase();

// console.log(a.increase());
// console.log(b.decrease());
// console.log(a.decrease());
// console.log(a.count);
// console.log(typeof a.increase);

//
// const shop = {
//   owner: "김오즈",
//   rating: 4.5,
//   hello() {
//     console.log(`${this.owner}입니다`);
//   },
// };

shop.hello();
const hello = shop.hello;
hello();
console.log(Math.round(shop.rating));

const day = new Date(2026, 9, 29);
console.log(day.getMonth());
console.log(day.getMonth() + 1);

//

const prices = [12000, 8000, 15000, 5000];

const expensive = prices.filter((price) => price >= 10000);
const discounted = expensive.map((price) => price - 1000);
const total = discounted.reduce((sum, price) => sum + price, 0);

console.log(expensive.length);
console.log(discounted[0]);
console.log(total);

function makeAdder(n) {
  return (x) => x + n;
}
const add1000 = makeAdder(1000);
console.log(add1000(500));
console.log(prices.map(makeAdder(1))[3]);