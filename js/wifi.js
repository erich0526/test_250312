document.addEventListener("DOMContentLoaded", function () {
    // 取得按鈕
    let Homebutton = document.getElementById('HomePage');

    // 當按鈕被點擊時
    Homebutton.addEventListener('click', function () {
        window.open('/test_250312/index.html', '_self');
    });

});