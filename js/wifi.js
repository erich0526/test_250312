// document.addEventListener("DOMContentLoaded", function () {
//     // 取得按鈕
//     let Homebutton = document.getElementById('HomePage');

//     // 當按鈕被點擊時
//     Homebutton.addEventListener('click', function () {
//         window.open('../index.html', '_self');
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const content_text = document.getElementById("content");
    const Button_A = document.getElementById("A");
    const Button_B = document.getElementById("B");
    const Button_C = document.getElementById("C");
    const Button_D = document.getElementById("D");

    Button_A.addEventListener("click", function () {
        content_text.textContent = "你的資料被竊取了!";
    });

    Button_B.addEventListener("click", function () {
        content_text.textContent = "你的資料被竊取了!";
    });

    Button_C.addEventListener("click", function () {
        content_text.textContent = "非常好!成功保護自己的資料!";
    });

    Button_D.addEventListener("click", function () {
        content_text.textContent = "甚麼事都沒發生，又是個開心的一天";
    });
});
