function showOptions() {
    const listOptions = window.parent.document.getElementById("list-options-user");
    if (listOptions.style.display === "flex") {
        listOptions.style.display = "none";
    } else {
        listOptions.style.display = "flex";
    }
}

function closeOption(){
    const listOptions = window.parent.document.getElementById("list-options-user");
    listOptions.style.display = "none";
}