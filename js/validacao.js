function validarCadastro(dados) {
    const erros = [];

    if (!nomeValido(dados.nome)) {
        erros.push({ campo: "nome", mensagem: "Informe nome e sobrenome." });
    }

    if (new Date(dados.data_nascimento) >new Date()) {
        erros.push({ campo: "data-nascimento", mensagem: "A data de nascimento não pode estar no futuro." });
    }

    for (const c of listarCadastros()) {
        if (c.cpf === dados.cpf) {
            erros.push({ campo: "cpf", mensagem: "Este CPF já está cadastrado."});
        }
    }

    return erros;
}

function mostrarErroCampo(idCampo, texto) {
    const campo = document.getElementById(idCampo);
    campo.classList.add("campo-invalido");
    campo.insertAdjacentHTML("afterend", `<span class="erro-campo" role="alert">${texto}</span>`);
}

function limparErros(form) {
    for (const campo of form.querySelectorAll(".campo-invalido")) {
        campo.classList.remove("campo-invalido");
    }
    for (const aviso of form.querySelectorAll(".erro-campo")) {
        aviso.remove();
    }
}

function nomeValido(nome) {
    return nome.trim().split(" ").length >= 2;
}

function limparErroCampo(campo) {
    campo.classList.remove("campo-invalido");
    const proximo = campo.nextElementSibling;
    if (proximo && proximo.classList.contains("erro-campo")) {
        proximo.remove();
    }
}