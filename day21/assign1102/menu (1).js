// 연결 — menu.js가 내보낸 함수와 배열을 가져와 버튼에 연결합니다
import TODO 4 from "./menu (1).js";
import { TODO 5 } TODO 6 "./menu.js";

const countEl = document.querySelector("#count");
const resultEl = document.querySelector("#result");
const pickBtn = document.querySelector("#pick-btn");

countEl.textContent = `메뉴 ${menus.length}가지`;

pickBtn.addEventListener("click", () => {
  const menu = pickMenu(menus);
  resultEl.textContent = `오늘은 ${menu}!`;
});