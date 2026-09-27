const app = document.getElementById("app");

function mostrarPagina(nome) {
    const pagina = paginas[nome];
    if (typeof pagina === "function") {
        app.innerHTML = pagina ();
    } else {
        app.innerHTML = pagina || "<h2>Página não encontrada</h2>";
    }
    if (nome === "cadastro") {
        configurarcadastro ();
    }
    if (nome === "componentes") {
        configurarModais();
    }
}

function rotear() {
    const nome = location.hash.replace("#/", "") || "inicio";
    mostrarPagina(nome);
}

window.addEventListener("hashchange", rotear);
rotear();

