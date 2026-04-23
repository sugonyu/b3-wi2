// alert(1)
const pr = console.log;

//--------------------------------------
// pr(1);

// // pr(2)
// setTimeout(() => pr(2), 1000);

// pr(3);

//---------------- Callback function ----------------------------
// ❌ 함정! 모든 선배가 같은 사물함을 씀
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// ✅ 해결! let 쓰면 각자 다른 사물함
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//------------------ DOM -----------------------

const title = document.getElementById("title");
// title.textContent = "bar";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", ()=> {
    title.textContent = new Date().toDateString()
});

btn2.addEventListener("click", () => {
    title.textContent = "";
})