const form = document.querySelector("#todo-form");
const addBtn = document.querySelector("#add-btn");

//
form.addEventListener("submit", () => console.log("추가"));


//
function check(name, people) {
  if (name.trim() === "") {
    return "이름을 입력해 주세요";
  }
  if (people < 1 || people > 4) {
    return "인원은 1~4명";
  }
  return "통과";
}