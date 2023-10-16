function closeChosingRoomModal() {
    const modal = document.getElementById("show-room_modal");
    modal.style.display = "none";
}

function closeModal(event) {
    const modal = document.getElementById("show-room_modal");
    const contenMmodal = document.getElementById("content_modal");
    if (event.target !== contenMmodal) {
        modal.style.display = "none";
    }
}
