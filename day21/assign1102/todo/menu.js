export const menus = ["김치찌개", "비빔밥", "칼국수", "돈가스", "떡볶이"];

export function pickMenu(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}
