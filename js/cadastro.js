function configurarcadastro () {
    const form = document.querySelector("#cadastro form");
    const mensagem = document.getElementById("mensagem");
    const campoCpf = document.getElementById("cpf");
        campoCpf.addEventListener("input", function () {
            campoCpf.value = formatarCpf(campoCpf.value);
        });
        const campoNome = document.getElementById("nome");
    campoNome.addEventListener("blur", function() {
        limparErroCampo(campoNome);
        if (!nomeValido(campoNome.value)) {
            mostrarErroCampo("nome", "Informe nome e sobrenome.");
        }
    });
    campoNome.addEventListener("input", function () {
        limparErroCampo(campoNome);
    });
        
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const dados = Object.fromEntries(new FormData(form));
        limparErros(form);
        const erros = validarCadastro(dados);
        if (erros.length > 0) {
            for (const erro of erros) {
                mostrarErroCampo(erro.campo, erro.mensagem);
            }
            mensagem.innerHTML = `
            <div class="alerta alerta-error" role="alert">
            <strong>Erro:</strong> corrija os campos destacados.
            </div>
            `;
            return;
        }
        dados.criadosEm = typeof daysjs !== "underfined"
        ? daysjs().format("DD/MM/YYYY HH:mm")
        : new Date ().toLocaleString("pt-BR");
        salvarCadastro(dados);
        atualizarContador();
        mensagem.innerHTML = `
        <div class="alerta alerta-success" role="status">
        <strong>Sucesso:</strong> seu cadastro foi recebido.
        </div>
        `;
        form.reset();
    });
}