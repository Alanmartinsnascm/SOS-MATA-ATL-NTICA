function listarCadastros(){
    try {
        return JSON.parse(localStorage.getItem("cadastros")) || [];
    } catch (erro) {
        console.warn("Dados de cadastros inválidos no localStorage. Reiniciando a lista.", erro);
        return [];
    }
}
function salvarCadastro (dados) {
    const cadastros = listarCadastros();
    cadastros.push(dados);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
}
