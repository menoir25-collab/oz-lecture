let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log(`${count}번`);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 1000);
console.log("시작");