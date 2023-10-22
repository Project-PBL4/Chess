function actionNavBtn() {
    const listNav = window.parent.document.getElementById("list-option-sidebar");
    if (listNav.style.display === "flex") {
        listNav.style.display = "none";
    } else {
        listNav.style.display = "flex";
    }
}