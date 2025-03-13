document.addEventListener("DOMContentLoaded", function () {
    // 創建前往新頁面的按鈕
    let button = document.createElement("button");
    button.textContent = "前往新頁面";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    
    // 按鈕點擊事件
    button.addEventListener("click", function () {
        window.open("password.html", "_self");
    });

    // 創建使用公用網路的風險按鈕
    let wifiButton = document.createElement("button");  // 修正這裡，應該是 "button"
    wifiButton.textContent = "使用公用網路的風險";
    wifiButton.style.padding = "10px 20px";
    wifiButton.style.fontSize = "16px";
    wifiButton.style.marginTop = "20px";
    
    // 按鈕點擊事件
    wifiButton.addEventListener("click", function () {
        window.open("html/wifi.html", "_self"); 
    });
    
    // 將創建的按鈕添加到頁面
    document.body.appendChild(button);
    document.body.appendChild(wifiButton);
});