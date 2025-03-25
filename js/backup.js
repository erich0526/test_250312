document.addEventListener("DOMContentLoaded", function () {
    const content_text = document.getElementById("content");
    const Button_A = document.getElementById("A");
    const Button_B = document.getElementById("B");
    const Button_C = document.getElementById("C");
    const Button_D = document.getElementById("D");

    Button_A.addEventListener("click", function () {
        content_text.textContent = "所有重要資料及珍貴照片都完好無缺!";
    });

    Button_B.addEventListener("click", function () {
        content_text.textContent = "電腦被貓咪打翻的飲料潑到，整台報廢，甚麼都沒有了...";
    });

    Button_C.addEventListener("click", function () {
        content_text.textContent = "半年前出國玩的照片全部不見，要哭了...";
    });

    Button_D.addEventListener("click", function () {
        content_text.textContent = "明天要交的工作進度被誤刪，要完蛋了...";
    });
});
