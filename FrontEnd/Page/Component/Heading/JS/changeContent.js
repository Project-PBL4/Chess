let cx = document.querySelector.bind(document);
const login_btn = cx('.login_btn');
const lobby_btn = cx('.lobby_btn');

function changeToLobby(){
    lobby_btn.classList.add('open');
    login_btn.classList.remove('open');
}

function changeToLogin(){
    lobby_btn.classList.remove('open');
    login_btn.classList.add('open');
}




