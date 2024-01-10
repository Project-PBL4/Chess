const usernameElement = cx(".username");
const passwordElement = cx(".password");
const warningFailedLoginEle = cx(".warning-failedLogin");
function submitForm() {
    if (checkInfo() == true) {
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
                    warningFailedLoginEle.style.display = "flex";
                    throw new Error('Login failed');
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
}

function checkInfo() {
    const warningUsernameEle = cx(".warning-username");
    const warningPasswordEle = cx(".warning-passowrd");

    const usernameEmpty = usernameElement.value.trim() === "";
    const passwordEmpty = passwordElement.value.trim() === "";

    warningUsernameEle.style.display = usernameEmpty ? "flex" : "none";
    warningPasswordEle.style.display = passwordEmpty ? "flex" : "none";

    return !usernameEmpty && !passwordEmpty;
}
