const memoInput = document.getElementById("memoInput");
const memoBtn = document.getElementById("memoBtn");
const memoCount = document.getElementById("memoCount");
const memoLst = document.getElementById("memoLst");

if (!memoInput || !memoBtn || !memoCount || !memoLst) {
    throw new Error("Required memo elements are missing.");
}

function getMemoText() {
    if (!(memoInput instanceof HTMLInputElement)) {
        return "";
    }

    return memoInput.value.trim();
}

function createMemoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

function resetInput() {
    if (!(memoInput instanceof HTMLInputElement)) {
        return;
    }

    memoInput.value = "";
    memoInput.focus();
}

function updateMemoCount() {
    if (!(memoCount instanceof HTMLElement)) {
        return;
    }

    if (!(memoLst instanceof HTMLElement)) {
        return;
    }

    memoCount.textContent = "Total memos: " + memoLst.children.length;
}

function addMemo() {
    if (!(memoLst instanceof HTMLElement)) {
        return;
    }

    const memoText = getMemoText();

    if (memoText === "") {
        return;
    }

    const memoItem = createMemoItem(memoText);
    memoLst.appendChild(memoItem);
    updateMemoCount();
    resetInput();
}

if (memoBtn instanceof HTMLButtonElement) {
    memoBtn.addEventListener("click", addMemo);
}

if (memoInput instanceof HTMLInputElement) {
    memoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addMemo();
        }
    });
}

updateMemoCount();

/*

왜 이 버전이 좋은가

if (!memoInput || !memoBtn || !memoCount || !memoLst)
여기서 한 번 존재 확인을 끝냅니다.

그다음에도 instanceof를 쓰는 이유는,
“있다”와 “내가 기대한 타입이다”는 다르기 때문입니다.

예를 들면:

memoInput이 존재해도 <div>일 수 있음
memoBtn이 존재해도 <span>일 수 있음

그래서 아래처럼 타입이 중요한 부분만 한 번 더 좁혀주는 겁니다.

memoInput.value
memoInput.focus()
memoBtn.addEventListener(...)

*/