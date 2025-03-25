document.addEventListener("DOMContentLoaded", function () {
    // 取得按鈕
    let button = document.getElementById('Password');
    let wifiButton = document.getElementById('WiFiPage');
    let templete = document.getElementById('templete');
    let FA = document.getElementById('2FA');
    let backup = document.getElementById('backup');
    let update = document.getElementById('update');


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

    FA.addEventListener('click', function () {
        window.open('html/2FA.html', '_self');
    });

    backup.addEventListener('click', function () {
        window.open('html/backup.html', '_self');
    });

    update.addEventListener('click', function () {
        window.open('html/update.html', '_self');
    });
});