document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("revealButton");
    let message = document.getElementById("message");
    let container = document.querySelector(".container");
    let rainContainer = document.getElementById("rain-container");
    let body = document.body; // Pega o body para mudar o fundo

    // Criando elemento de áudio
    let audio = new Audio("pituri.m4a");
    audio.loop = true; // Faz a música repetir sem parar

    button.addEventListener("click", function() {
        button.style.display = "none"; // Esconde o botão
        message.style.display = "block"; // Exibe a mensagem antes da animação

        setTimeout(() => {
            message.classList.add("show");
            container.classList.add("active"); // Muda a cor da div
            body.classList.add("bg-change"); // Muda o fundo para "aderaldo.jpg" suavemente
            startRain(); // Inicia a chuva
            audio.play(); // Toca a música
        }, 50);
    });

    function startRain() {
        for (let i = 0; i < 15; i++) {
            createRaindrop();
        }

        setInterval(createRaindrop, 500);
    }

    function createRaindrop() {
        let raindrop = document.createElement("img");
        raindrop.src = "guilhermino.png";
        raindrop.classList.add("rain");

        let size = Math.random() * 40 + 20;
        raindrop.style.width = size + "px";

        raindrop.style.left = Math.random() * window.innerWidth + "px";
        raindrop.style.animationDuration = (Math.random() * 4 + 3) + "s";
        raindrop.style.animationTimingFunction = "linear";

        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 7000);
    }
});