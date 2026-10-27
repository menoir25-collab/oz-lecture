function check(name, people) {
  if (name.trim() === "") {
    return "이름을 입력해 주세요";
  }
  if (people < 1 || people > 4) {
    return "인원은 1~4명";
  }
  return "통과";
}

console.log(check("김오즈", 2));
console.log(check("", 2));
console.log(check("김오즈", 5));
console.log(check("   ", 0));
console.log(check("김오즈", Number("")));