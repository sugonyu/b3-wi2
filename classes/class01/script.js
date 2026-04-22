const memoInput = document.getElementById("memoInput");
const memoBtn = document.getElementById("memoBtn");
const memoLst = document.getElementById("memoLst");

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

function addMemo() {
    const memoText = getMemoText();

    if (memoText === "") {
        return;
    }

    const memoItem = createMemoItem(memoText);
    memoLst.appendChild(memoItem);
    resetInput();
}

memoBtn.addEventListener("click", addMemo);

memoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addMemo();
    }
});
