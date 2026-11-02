// 메뉴 목록과, 목록에서 하나를 고르는 함수 — main.js가 가져다 씁니다
TODO 2 const menus = ["김치찌개", "비빔밥", "칼국수", "돈가스", "떡볶이"];

TODO 3 function pickMenu(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}