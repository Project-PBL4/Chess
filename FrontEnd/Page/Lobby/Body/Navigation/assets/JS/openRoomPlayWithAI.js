function openRoomWithAI() {
    const contentIframe = window.parent.document.getElementsByName("content")[0];
    const desc_img = contentIframe.contentDocument.getElementById("chessboard-desc_img");
    const roomAI = contentIframe.contentDocument.getElementById("chessboard");
    const main_nav = document.querySelector(".main-nav");
    const extra_playing_screen = document.querySelector(".extra-playing-screen");
    main_nav.classList.remove("open");
    extra_playing_screen.classList.add("open");
    roomAI.style.display = "flex";
    desc_img.style.display = "none";
}
