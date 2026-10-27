// DAY 13 JavaScript 배열과 객체 기초
console.log("index.js가 연결됐습니다!!!");

const fruites = ["사과", "바나나", "오렌지"];
console.log(fruites[0]);
console.log(fruites[2]);
console.log(fruites[fruites.length - 1]);
console.log(fruites[5]);
console.log(fruites.length);

fruites[1] = "망고";
console.log(fruites);

// 맨 뒤에 더할 때는 번호 대신
fruites.push("포도");
console.log(fruites);

// length로 처음부터 끝까지 반복시키기
const scores = [80, 95, 70, 55];
let total = 0;
for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  total += score;
}
console.log("총합", total);
console.log("평균", total / scores.length);

// 배열에 요소 넣기 빼기
console.log(fruites);

fruites.push("딸기"); // 배열 뒤에 추가
console.log(fruites);

const poped = fruites.pop(); // 배열 뒤에 빼기
console.log(poped);
console.log(fruites);

fruites.unshift("수박"); // 배열 앞에 추가
console.log(fruites);

const shifted = fruites.shift();
console.log(shifted);
console.log(fruites);

// 배열 splice (지우기, 바꾸기, 끼워넣기)
const removed = fruites.splice(1, 1, "딸기"); // 인수를 한개준경우, 두개준경우, 세개준경우 동작이 다름
console.log(removed);
console.log(fruites);

// 객체 선언
const bread = {
  name: "팥붕어빵",
  price: 1000,
  ingredients: ["밀가루", "팥", "설탕"],
  isHot: true,
};
console.log(bread);
console.log("이름 :", bread.name);
console.log("가격 :", bread.price);
console.log("크기 :", bread.size);
console.log("따뜻한가요? :", bread["isHot"]); // bread.isHot

bread.price = 500;
bread.owner = "김오즈";
console.log(bread);

const user = {
  userName: "김오즈",
  address: {
    city: "서울",
    zip: "04524",
  },
  likes: ["커피", "코딩"],
  greet() {
    return "안녕하세요";
  },
};
console.log(user);
console.log(user.address.city);
console.log(user.likes[1]);
console.log(user.likes.length);
console.log(user.greet());
//
const products =[
    {
        id: 1,
        pdtName: "텀블러",
        price: 18000,
        stock:0
    },

    {
        id:2,
        pdtName: "에코백",
        price: 9000,
        stock: 5,

    },
];

console.log(products);
console.log(products [0].pdtName);
console.log([2].price);



// 배열 for로 돌아보기
let pdctTotal = 0;
for (let i = 0; i < products.length; i++) {
  const item = products[i];
  console.log(`${item.pdctName} ${item.price}원`);
  pdctTotal += item.price * item.stock;
}
console.log(`재고 금액 합계 ${pdctTotal}원`);

// 객체 => JSON
const json = JSON.stringify(products);
console.log(json);

// JSON => 객체
const back = JSON.parse(json);
console.log(back);

// 과제
const cart = ["우유", "빵"];
const a = cart.push("계란");
const b = cart[cart.length - 1];
const c = cart.shift();
cart.unshift("버터");
const d = cart.splice(1, 1);
const e = cart.slice(0, 1);
console.log(cart);

const user = {
    name: "김오즈", 
    age: 28,
    "phone number":"010-7654-2981",
    address: { city: "서울", zip: "07653" },
    likes: ("커피", "코딩"),}
04.
console.log(user.name); "김오즈"
console.log(user.["phone number]); "010-7654-2981"
console.log(user.likes[1]); "코딩"
console.log(user.address, city);"서울"
console.log(user.email);undefined
.05 배열일까  갹체일까?
a. 배열
b. 객체
c. 배열
d. 객체
e. 배열