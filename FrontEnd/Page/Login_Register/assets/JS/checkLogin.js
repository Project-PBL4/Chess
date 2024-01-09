function submitForm() {
    const usernameElement = document.querySelector(".username");
    const passwordElement = document.querySelector(".password");
    var formData = {
        userName: usernameElement.value,
        userPassword: passwordElement.value,
    };
    fetch("http://localhost:8080/api/v1/users/checkLogin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const userId = data.data[0].id;
            // Store the userId in sessionStorage
            sessionStorage.setItem("userId", userId);
            window.top.location.reload();            
        })
        .catch((error) => {
            console.log(error);
        });
}

function checkInfo() {
    const usernameElement = document.querySelector(".username");
    const passwordElement = document.querySelector(".password");
    const login_submitElement = document.querySelector(".login_submit");

    if (usernameElement.value.trim() === "" || passwordElement.value.trim() === "") {
        login_submitElement.disabled = true;
    } else {
        login_submitElement.disabled = false;
    }
}
