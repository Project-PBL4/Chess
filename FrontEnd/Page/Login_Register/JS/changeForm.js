let cx = document.querySelector.bind(document);
const login_form= cx('.login_form');
const register_form = cx('.register_form');
const login_btn= cx('.login_btn');
const register_btn = cx('.register_btn');

function changeToLogin(){
    login_form.classList.add('open');
    login_btn.classList.add('active');    
    register_btn.classList.remove('active');
    register_form.classList.remove('open');
}

function changeToRegister(){
    login_form.classList.remove('open');
    login_btn.classList.remove('active');    
    register_btn.classList.add('active');
    register_form.classList.add('open');
}