
const ageInput = document.querySelector("#age");

ageInput.addEventListener("input", (event) => {
  console.log(event.type, event.target.id, event.target.value);
});

ageInput.addEventListener("keyup", (event) => {
  console.log(event.key);
});