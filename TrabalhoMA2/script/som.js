const hover = new Audio();
const click = new Audio();

hover.src = "../audio/botao.mp3";
click.src = "../audio/click.mp3";

function playAudio(elemento) {
    elemento.currentTime = 0;
    elemento.play();
}

const botoes = document.querySelectorAll('.audioBtn');
botoes.forEach((button) => {
    button.addEventListener("mouseover", () => playAudio(hover));
    button.addEventListener("click", () => playAudio(click));
});