function configurarModais() {
    const botoesAbrir = document.querySelectorAll("[data-abrir-modal]");
    const botoesFechar = document.querySelectorAll("[data-fechar-modal]");

    for (const botao of botoesAbrir) {
        botao.addEventListener("click", function () {
            const id = botao.getAttribute("data-abrir-modal");
            document.getElementById(id).classList.add("modal-aberta");
        });
    }

    for (const botao of botoesFechar) {
        botao.addEventListener("click", function () {
            botao.closest(".modal").classList.remove("modal-aberta");
        });
    }

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            for (const modal of document.querySelectorAll(".modal.modal-aberta")) {
                modal.classList.remove("modal-aberta");
            }
        }
    });
}
