const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao = document.getElementById('confirma');
const error = document.getElementById("error");

formulario.addEventListener('submit', (evento) => {
    let erros = [];

    if (nome.value === '' || nome.value == null) {
        erros.push("Nome é obrigatório");
    }

    if (!emailValido(email.value)) {
        erros.push("E-mail inválido.");
    }
    
    if (senha.value.length < 16) {
        erros.push("A senha deve ter pelo menos 16 caracteres.");
    }
    
    if (confirmacao.value != senha.value) {
        erros.push("As senhas não coincidem.");
    }

    if (erros.length > 0) {
        evento.preventDefault();
        error.innerText = erros.join(', ');
    }
});

function emailValido(email) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
}