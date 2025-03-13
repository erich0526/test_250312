document.addEventListener("DOMContentLoaded", function () {
    // 創建按鈕
    let button = document.createElement("button");
    button.textContent = "前往新頁面";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    
    // 按鈕點擊事件
    button.addEventListener("click", function () {
        window.open("html/password.html", "_blank");
    });
    
    // 將按鈕添加到頁面
    document.body.appendChild(button);
});
