document.addEventListener("DOMContentLoaded", function () {
    const battleText = document.getElementById("battle-text");
    const fightButton = document.getElementById("fight");
    const bagButton = document.getElementById("bag");
    const pokemonButton = document.getElementById("pokemon");
    const runButton = document.getElementById("run");

    fightButton.addEventListener("click", function () {
        battleText.textContent = "Blastoise used Hydro Pump!";
        battleText.classList.add("attack-animation");
        setTimeout(() => battleText.classList.remove("attack-animation"), 1000);
    });

    bagButton.addEventListener("click", function () {
        battleText.textContent = "Opened the bag...";
    });

    pokemonButton.addEventListener("click", function () {
        battleText.textContent = "Choose another Pokémon...";
    });

    runButton.addEventListener("click", function () {
        battleText.textContent = "Can't escape!";
    });
});
