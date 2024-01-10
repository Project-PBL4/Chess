const cx = document.querySelector.bind(document);
function openAndCloseNation() {
    const iconShow = cx(".icon-down");
    const nationModal = cx(".select-nations");

    if (nationModal.classList.contains("open")) {
        nationModal.classList.remove("open");
    } else {
        nationModal.classList.add("open");
    }
}

function selectNation(event) {
    const inputNation = document.querySelector(".nation");
    const nationModal = cx(".select-nations");
    inputNation.value = event.target.getAttribute("value");
    nationModal.classList.remove("open");
}
