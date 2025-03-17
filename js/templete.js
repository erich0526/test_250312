document.addEventListener("DOMContentLoaded", function () {
    const content_text = document.getElementById("content");
    const Button_A = document.getElementById("A");
    const Button_B = document.getElementById("B");
    const Button_C = document.getElementById("C");
    const Button_D = document.getElementById("D");

    Button_A.addEventListener("click", function () {
        content_text.textContent = "Blastoise used Hydro Pump!";
    });

    Button_B.addEventListener("click", function () {
        content_text.textContent = "Opened the bag...";
    });

    Button_C.addEventListener("click", function () {
        content_text.textContent = "Choose another Pokémon...";
    });

    Button_D.addEventListener("click", function () {
        content_text.textContent = "Can't escape!";
    });
});
