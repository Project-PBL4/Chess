function showOptions() {
    const listOptions = window.parent.document.getElementById("list-options-user");
    if (listOptions.style.display === "flex") {
        listOptions.style.display = "none";
    } else {
        listOptions.style.display = "flex";
    }
}

function closeOption(String){
    const listOptions = window.parent.document.getElementById("list-options-user");
    listOptions.style.display = "none";
    if(String != null && String == "logout") {
        sessionStorage.removeItem("userId");
        window.location.reload();
    }
}