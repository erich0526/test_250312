document.addEventListener("DOMContentLoaded", function () {
    // 取得按鈕
    let button = document.getElementById('Password');
    let wifiButton = document.getElementById('WiFiPage');
    let templete = document.getElementById('templete');


    // 當按鈕被點擊時
    button.addEventListener('click', function () {
        window.open('html/password.html', '_self');
    });

    wifiButton.addEventListener('click', function () {
        window.open('html/wifi.html', '_self');
    });

    templete.addEventListener('click', function () {
        window.open('html/templete.html', '_self');
    });
});