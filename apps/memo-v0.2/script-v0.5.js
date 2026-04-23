const memoInput = document.getElementById("memoInput");
const memoBtn = document.getElementById("memoBtn");
const memoCount = document.getElementById("memoCount");
const memoLst = document.getElementById("memoLst");

if (!memoInput || !memoBtn || !memoCount || !memoLst) {
    throw new Error("Required memo elements are missing.");
}

function getMemoText() {
    return memoInput.value.trim();
}

function createMemoItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

function resetInput() {
    memoInput.value = "";
    memoInput.focus();
}

function updateMemoCount() {
    memoCount.textContent = "Total memos: " + memoLst.children.length;
}

function addMemo() {
    const memoText = getMemoText();

    if (memoText === "") {
        return;
    }

    const memoItem = createMemoItem(memoText);
    memoLst.appendChild(memoItem);
    updateMemoCount();
    resetInput();
}

memoBtn.addEventListener("click", addMemo);

memoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addMemo();
    }
});

updateMemoCount();