// shop.js
export const shopName = "오즈 카페";

export function price(menu) {
  return menu === "라떼" ? 4500 : 3000;
}

export default function hello(name) {
  return `${name}님, 어서 오세요`;
}
