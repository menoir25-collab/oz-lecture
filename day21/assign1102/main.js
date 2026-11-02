
// main.js
import greet, { shopName, price as getPrice } from "./shop.js";
import * as shop from "./shop.js";

console.log(shopName);
console.log(getPrice("라떼"));
console.log(greet("김오즈"));
console.log(shop.price("아메리카노"));
console.log(getPrice === shop.price);