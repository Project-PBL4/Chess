let cx = document.querySelector.bind(document);
const login_link = cx('.login_link');
const lobby_link = cx('.lobby_link');

function changeToLobby(){
    lobby_link.classList.add('open');
    login_link.classList.remove('open');
}

function changeToLogin(){
    lobby_link.classList.remove('open');
    login_link.classList.add('open');
}




