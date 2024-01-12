function openWarningModel() {
    const warningModel = cx(".warning-delete");
    warningModel.classList.add("open");
}

function closeWarningModel() {
    const warningModel = cx(".warning-delete");
    warningModel.classList.remove("open");
}

function deleteUser() {
    formData = {
        id: sessionStorage.getItem("userId"),
    };
    fetch("http://localhost:8080/api/v1/users/" + sessionStorage.getItem("userId"), {
        method: "DELETE"
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            } else {
                sessionStorage.removeItem("userId");
                window.top.location.reload();
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
        })
        .catch(function (error) {
            // Xử lý lỗi nếu có
            console.log("Error during fetch operation:", error);
        });
}
