function openRoomWithAI() {
    const contentIframe = window.parent.document.getElementsByName("content")[0];
    const desc_img = contentIframe.contentDocument.getElementById("chessboard-desc_img");
    const roomAI = contentIframe.contentDocument.getElementById("chessboard");
    roomAI.style.display = "flex";
    desc_img.style.display = "none";
}
