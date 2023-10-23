function closeNotification(button) {
    let notification = button.parentNode;
    notification.classList.add("animate-close");
    
    setTimeout(function() {
        notification.style.display = "none";
    }, 500);
}