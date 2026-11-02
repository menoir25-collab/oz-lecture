// 메뉴 목록과, 목록에서 하나를 고르는 함수 — main.js가 가져다 씁니다
 // 연결 — menu.js가 내보낸 함수와 배열을 가져와 버튼에 연결합니다


import { menus, pickMenu } from "./menu.js";

const countEl = document.querySelector("#count");
const resultEl = document.querySelector("#result");
const pickBtn = document.querySelector("#pick-btn");

countEl.textContent = `메뉴 ${menus.length}가지`;

pickBtn.addEventListener("click", () => {
  const menu = pickMenu(menus);
  resultEl.textContent = `오늘은 ${menu}!`;
});
