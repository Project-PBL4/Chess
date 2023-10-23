function closeChosingRoomModal() {
    const modal = document.getElementById("room_modal");
    modal.style.display = "none";
}

function closeModal(event) {
    const modal = document.getElementById("room_modal");
    const contentModal = document.querySelector(".content_modal");
    if (!contentModal.contains(event.target)) {
        modal.style.display = "none";
    }
}
