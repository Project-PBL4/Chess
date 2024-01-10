document.addEventListener("DOMContentLoaded", function () {
    // Gửi yêu cầu GET đến API
    fetch("http://localhost:8080/api/v1/users/" + sessionStorage.getItem("userId"))
        .then(function (response) {
            // Kiểm tra xem yêu cầu có thành công không (status code 200)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            // Chuyển đổi dữ liệu nhận được sang JSON
            return response.json();
        })
        .then(function (data) {
            // Xử lý dữ liệu JSON nhận được và cập nhật nội dung HTML
            console.log(data);
            updateProfile(data.data); // Assuming you only want to update the profile for the first user
        })
        .catch(function (error) {
            // Xử lý lỗi nếu có
            console.log("Error during fetch operation:", error);
        });

    function updateProfile(user) {
        // Lấy tham chiếu đến các phần tử HTML bạn muốn cập nhật
        const cx = document.querySelector.bind(document);
        const nameElement = cx(".name");
        const titleNameElement = cx(".title-name");
        const pointElement = cx(".point");
        const emailElement = cx(".email");
        const storyElement = cx(".content-story");
        const nationElement = cx(".nation");

        storyElement.value = user.story;
        nameElement.value = user.name;
        pointElement.value = user.countRank;
        titleNameElement.value = user.name;
        emailElement.value = user.userEmail;
        nationElement.value = user.country;
    }
});
