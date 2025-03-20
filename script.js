// Obter o modal
let modal = document.getElementById("loginModal");

// Obter o botão que abre o modal
let btn = document.querySelector(".btn-login");

// Obter o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Garantir que o modal esteja oculto ao carregar a página
window.onload = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}