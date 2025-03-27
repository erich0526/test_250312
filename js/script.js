document.addEventListener("DOMContentLoaded", function () {
    // 取得按鈕
    let button = document.getElementById('Password');
    let wifiButton = document.getElementById('WiFiPage');
    let FA = document.getElementById('2FA');
    let backup = document.getElementById('backup');
    let update = document.getElementById('update');
    let status = document.getElementById('status');
    // 取得按鈕元素
    const randomButton = document.getElementById("randomPage");

    // HTML 資料夾內的頁面列表
    const pages = [
        "2FA.html",
        "backup.html",
        "password.html",
        "update.html",
        "wifi.html"
    ];

    // 監聽按鈕點擊事件
    randomButton.addEventListener("click", function () {
        // 隨機選擇一個頁面
        const randomIndex = Math.floor(Math.random() * pages.length);
        const randomPage = pages[randomIndex];

        // 開啟該頁面
        window.location.href = "html/" + randomPage;
    });

    // 當按鈕被點擊時
    button.addEventListener('click', function () {
        window.open('html/password.html', '_self');
    });

    wifiButton.addEventListener('click', function () {
        window.open('html/wifi.html', '_self');
    });

    FA.addEventListener('click', function () {
        window.open('html/2FA.html', '_self');
    });

    backup.addEventListener('click', function () {
        window.open('html/backup.html', '_self');
    });

    update.addEventListener('click', function () {
        window.open('html/update.html', '_self');
    });

    status.addEventListener('click', function () {
        window.open('html/status.html', '_self');
    });
});
