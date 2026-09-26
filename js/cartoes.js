function cartaoCadastro(c) {
    return `
    <article class="cartao">
    <h3>${escapar(c.nome)}</h3>
    <p>${escapar(c.email)}</p>
    <span class="badge badge-info">${escapar(c.estado)}</span>
    <p><small>Cadastrado em ${escapar(c.criadoEm || "data não registrada")}</small></p>
    </article>
    `;
}
function cartaoProjeto(p) {
    return `
    <article class="cartao">
     <h3>${escapar(p.titulo)}</h3>
     <p>${escapar(p.descricao)}</p>
     <span class="badge badge-success">${escapar(p.categoria)}</span>
    </article>
    `;
}