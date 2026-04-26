// 1️⃣ DOM 요소 선택
const memoInput = document.getElementById("memoInput");
const addMemoBtn = document.getElementById("addMemoBtn");
// const refreshBtn = document.getElementById("refreshBtn");
const memoList = document.getElementById("memoList");

// 2️⃣ 상태 변수
let memos = [];

// 3️⃣ 초기화 (localStorage에서 불러오기, 안전하게)
try {
  const loadedData = localStorage.getItem("memos");
  if (loadedData) memos = JSON.parse(loadedData);
} catch (e) {
  memos = [];
}

// 4️⃣ 유틸 함수
function saveMemos() {
  localStorage.setItem("memos", JSON.stringify(memos));
}

function renderMemos() {
  memoList.innerHTML = "";
  memos.forEach((memo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = memo;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", () => {
      memos.splice(index, 1);
      saveMemos();
      renderMemos();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    memoList.appendChild(li);
  });
}

function addMemo() {
  const memoText = memoInput.value.trim();
  if (!memoText) return;
  memos.push(memoText);
  saveMemos();
  renderMemos();
  memoInput.value = "";
  memoInput.focus()
}

// 5️⃣ 이벤트 리스너
addMemoBtn.addEventListener("click", addMemo);


memoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addMemo();
});

// refreshBtn.addEventListener("click", () => location.reload(true));

// 6️⃣ 최초 렌더링
renderMemos();
