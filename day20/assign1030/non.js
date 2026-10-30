// const BASE_URL = "https://jsonplaceholder.typicode.com";

// async function getJSON(url) {
//   const response = await fetch(url);
//   (!response.ok) {
//     const error = new Error(`응답 상태 ${response.status}`);
//     error.status = response.status;
//     throw error;
//   }
//   return response.text();
// }

// function toMessage(error) {
//   if (error.name === "TypeError") return "인터넷 연결을 확인해 주세요";
//   if (error.status === 404) return "찾는 글이 없습니다";
//   return "잠시 후 다시 시도해 주세요";
// }

// async function show(id) {
//   try {
//     const post = await getJSON(`${BASE_URL}/posts/${id}`);
//     console.log(post.id);
//   } catch (error) {
//     console.log(toMessage(error));
//   }
// }

//
let state = { status: "idle", items: [] };

function render() {
  if (state.status === "loading") return "불러오는 중…";
  if (state.status === "error") return "다시 시도";
  if (state.items.length === 0) return "결과 없음";
  return `${state.items.length}개`;
}

console.log(render());
state = { status: "loading", items: [] };
console.log(render());
state = { status: "success", items: ["라떼", "모카"] };
console.log(render());
state = { status: "error", items: ["라떼", "모카"] };
console.log(render());
state = { status: "success", items: [] };
console.log(render());