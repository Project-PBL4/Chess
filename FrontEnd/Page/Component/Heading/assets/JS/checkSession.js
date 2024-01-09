// Retrieve the userId from localStorage
const storedUserId = sessionStorage.getItem('userId');
// Use the storedUserId as needed
console.log(storedUserId);
const loginElement = document.querySelector('.login_link');
const userElement =document.querySelector('.profile-user');
if(storedUserId != null) {
    loginElement.style.display = 'none';
    userElement.style.display = 'flex';
}else {
    
    loginElement.style.display = 'flex';
    userElement.style.display = 'none';
}