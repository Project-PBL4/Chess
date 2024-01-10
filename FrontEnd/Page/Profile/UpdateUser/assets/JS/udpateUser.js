function updateUser() {
    const nameElement = cx(".name");
    const storyElement = cx(".content-story");
    const nationElement = cx(".nation");
    if (checkInforRegister(nameElement, nationElement) === true) {
        var formData = {
            name: nameElement.value,
            story: storyElement.value,
            country: nationElement.value,
        };
        fetch("http://localhost:8080/api/v1/users/" + sessionStorage.getItem('userId'), {
            method: "PUT",
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
                console.log(data);
                window.top.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function checkInforRegister(usernameEle, nationElement) {
    const lackInforEle = cx(".warning-lackInfor");
    const usernameEmpty = usernameEle.value.trim() === "";
    const nationEmpty = nationElement.value.trim() === "";
    if (usernameEmpty == true || nationEmpty == true) {
        lackInforEle.style.display = "flex";
        return false;
    } else lackInforEle.style.display = "none";
    return true;
}
