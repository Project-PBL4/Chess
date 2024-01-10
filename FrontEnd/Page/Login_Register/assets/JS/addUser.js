function addUser() {
    const usernameEle = cx(".username_register");
    const passwordEle = cx(".password_register");
    const countryEle = cx(".nation");
    if (checkInforRegister(usernameEle, passwordEle, countryEle) === true && checkPassword() === true) {
        // Tạo một đối tượng Date đại diện cho thời gian hiện tại
        const currentDate = new Date();

        // Lấy thông tin về ngày, tháng, năm
        const day = currentDate.getDate(); // Lấy ngày trong tháng (1-31)
        const month = currentDate.getMonth() + 1; // Lấy tháng (0-11), cộng thêm 1 vì tháng bắt đầu từ 0
        const year = currentDate.getFullYear(); // Lấy năm

        var formData = {
            userName: usernameEle.value,
            userPassword: passwordEle.value,
            country: countryEle.value,
            joiningDate: day + "/" + month + "/" + year,
            totalLoss: 0,
            totalRound: 0,
            totalTie: 0,
            totalWin: 0,
        };
        fetch("http://localhost:8080/api/v1/users/insert", {
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
                console.log(data);
                window.top.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function checkInforRegister(usernameEle, passwordEle, countryEle) {
    const lackInforEle = cx(".warning-lackInfor");
    console.log(passwordEle);
    const usernameEmpty = usernameEle.value.trim() === "";
    const passwordEmpty = passwordEle.value.trim() === "";
    const countryEmpty = countryEle.value.trim() === "";
    if (usernameEmpty == true || passwordEmpty == true || countryEmpty == true) {
        lackInforEle.style.display = "flex";
        return false;
    } else lackInforEle.style.display = "none";
    return true;
}

function checkPassword() {
    const passwordAgain_registerEle = cx(".password-again_register");
    const passwordEle = cx(".password_register");
    const differentPasswordEle = cx(".warning-differentPassword");
    const checkSimilarPass = passwordEle.value.trim() === passwordAgain_registerEle.value.trim();

    if (!checkSimilarPass) {
        differentPasswordEle.style.display = "flex";
    } else differentPasswordEle.style.display = "none";
    return checkSimilarPass;
}
