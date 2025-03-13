document.addEventListener("DOMContentLoaded", function () {
    // // 創建按鈕
    // let button = document.createElement("button");
    // button.textContent = "前往新頁面";
    // button.style.padding = "10px 20px";
    // button.style.fontSize = "16px";
    // button.style.marginTop = "20px";
    
    // // 按鈕點擊事件
    // button.addEventListener("click", function () {
    //     window.open("password.html", "_self");
    // });

    // 找到現有的 Wi-Fi 按鈕
    let wifiButton = document.createElement("goToWiFiPage");
    wifiButton.textContent = "使用公用網路的風險";
    wifiButton.style.padding = "10px 20px";
    wifiButton.style.fontSize = "16px";
    wifiButton.style.marginTop = "20px";
    
    // 修正按鈕事件綁定
    wifiButton.addEventListener("click", function () {
        window.open("html/wifi.html", "_self");  // 使用 _self 在當前頁面打開 wifi.html
    });
    
    // 將創建的按鈕添加到頁面
    document.body.appendChild(button);
});