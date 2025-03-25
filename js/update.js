document.addEventListener("DOMContentLoaded", function () {
    const content_text = document.getElementById("content");
    const Button_A = document.getElementById("A");
    const Button_B = document.getElementById("B");
    const Button_C = document.getElementById("C");
    const Button_D = document.getElementById("D");

    Button_A.addEventListener("click", function () {
        content_text.textContent = "幸運躲過上個版本的重大漏洞..."
    });
    Button_B.addEventListener("click", function () {
        content_text.textContent = "個資已洩漏，請盡速更換密碼。";
    });

    Button_C.addEventListener("click", function () {
        content_text.textContent = "銀行帳戶已被盜用，請盡速通知銀行。";
    });

    Button_D.addEventListener("click", function () {
        content_text.textContent = "電腦被植入勒索病毒，資料已被加密。";
    });
});
