function configurarMenu () {
    const toggle = document.getElementById("menu-toggle");
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", function () {
            toggle.checked = false;
        });
    }
}

configurarMenu();

function atualizarContador() {
    const contador = document.getElementById("contador-cadastros");
    contador.textContent = listarCadastros().length;
}

 atualizarContador();
