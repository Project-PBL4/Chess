
document.addEventListener('DOMContentLoaded', function () {
    
    // Gửi yêu cầu GET đến API
    fetch('http://localhost:8080/api/v1/users/' + sessionStorage.getItem('userId'))
        .then(function (response) {
            // Kiểm tra xem yêu cầu có thành công không (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
            console.log('Error during fetch operation:', error);
        });

    function updateProfile(user) {
        // Lấy tham chiếu đến các phần tử HTML bạn muốn cập nhật
        const cx = document.querySelector.bind(document);
        const nameElement = cx(".name");
        const pointElement = cx(".point");
        const storyElement = cx(".story");
        const joningDateElement = cx(".joining-date");
        const totalRoundElement = cx(".total-match .count");
        const totalVictoryElement = cx(".total-victory .count");
        const totalDefautElement = cx(".total-default .count");
        const totalDrawElement = cx(".total-draw .count");
        const victoryPercentElement = cx(".victory-percent .count");
        const averageRankElement = cx(".average-rank .count");
        // ... (cập nhật thêm phần tử khác)

        // Cập nhật nội dung HTML với dữ liệu từ user
        nameElement.textContent = user.userName;
        pointElement.textContent = user.countRank;
        storyElement.textContent = "Phát ngôn: " + user.story;
        joningDateElement.textContent = "Thành viên kể từ: " + user.joiningDate;
        totalRoundElement.textContent = user.totalRound;
        totalVictoryElement.textContent = user.totalWin;
        totalDefautElement.textContent = user.totalLoss;
        totalDrawElement.textContent = user.totalTie;
        victoryPercentElement.textContent = user.totalWin / user.totalRound * 100 + "%";
        averageRankElement.textContent = user.countRank;

        // Cập nhật các phần tử khác tương tự
    }
});
