function creatingRoom() {
    const creatingRoomModal = document.querySelector('.creating-room');
    const mainNav = document.querySelector('.main-nav');
    creatingRoomModal.classList.add('open');
    mainNav.classList.remove('open');
}

function backMainNav(button) {
    const mainNav = document.querySelector('.main-nav');
    const creatingRoom = button.parentNode;
    mainNav.classList.add('open');
    creatingRoom.classList.remove('open');
}