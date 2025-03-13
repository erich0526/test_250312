document.addEventListener("DOMContentLoaded", function () {
    // 創建按鈕
    let button = document.createElement("button");
    button.textContent = "前往新頁面";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    // 按鈕點擊事件
    button.addEventListener("click", function () {
        window.open("password.html", "_self");
    });

    let wifiButton = document.getElementById("goToWiFiPage");
    wifiButton.textContent = "使用公用網路的風險";
    wifiButton.style.padding = "10px 20px";
    wifiButton.style.fontSize = "16px";
    wifiButton.style.marginTop = "20px";
    // 按鈕點擊事件
    wifiwifiButton.addEventListener("click", function () {
        // 在當前頁面中打開 wifi.html
        window.location.href = "html/wifi.html";
    });
    
    // 將按鈕添加到頁面
    document.body.appendChild(button);
});
