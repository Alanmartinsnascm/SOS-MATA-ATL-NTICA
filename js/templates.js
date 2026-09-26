function escapar(texto) {
const div = document.createElement("div");
div.textContent = texto;
return div.innerHTML;
}
const paginas = {
    inicio: `
    <div id="pagina-inicial">
    <section id="quem-somos">
      <h2>Quem Somos?</h2>
       <p>Atua na promoção de políticas públicas para a conservação da Mata Atlântica
       por meio do monitoramento do bioma, produção de estudos, projetos demonstrativos,
       diálogo com setores públicos e privados, aprimoramento da legislação ambiental,
       comunicação e engajamento da sociedade.</p>
    </section>

    <section id="fale-conosco">
            <h2>Fale Conosco</h2>
            <address>
                Contato: João Pensata<br>
                +55 (21) 99987-6094
            </address>
            <a href="http://wa.me/5521999876094" target="_blank" rel="noopener noreferrer">Clique aqui para ser direcionado ao WhatsApp</a>
    </section>

    <section id="historia">
            <details>
                <summary>Clique aqui para conferir nossa história</summary>
                <p>Na década de 1980, cientistas, empresários, jornalistas e defensores da questão ambiental se aproximam e lançam as bases para a criação da primeira ONG destinada a defender os últimos remanescentes de Mata Atlântica no país.</p>
                <p>Surgia a Fundação SOS Mata Atlântica, em 20 de setembro de 1986. Um nascimento que representou um passo adiante no amadurecimento do movimento ambientalista no país.</p>
                <p>Já em seus momentos iniciais, a ONG alia o ideal da conservação ambiental ao objetivo de profissionalizar pessoas e de gerar conhecimento sobre a floresta.</p>
                <p>A Fundação SOS Mata Atlântica construiu sua trajetória através da mobilização permanente e da aposta no conhecimento, na educação, na tecnologia, nas políticas públicas e na articulação em rede para consolidação do movimento socioambiental brasileiro.</p>
                <p>Confira a linha do tempo com os momentos que marcaram a história da Fundação SOS Mata Atlântica, suas lutas e principais conquistas.</p>
            </details>
    </section>
    </div>


    <figure>
        <img src="img/mata-atlantica-otimizada.jpg" alt="Vista aérea da Mata Atlântica, floresta densa e verde">
        <figcaption>
            A Mata Atlântica é um dos biomas mais ricos do mundo em biodiversidade.
        </figcaption>
    </figure>
    `,
    cadastro: `
    <section id="cadastro">
     <div id="mensagem"></div>
        <form method="post" action="#">
        
                <h2>Cadastro</h2>
                <p>Preencha seus dados para nosso formulário de contato do SOS MATA ATLÂNTICA</p>

                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label for="nome">Nome *</label>
                    <input type="text" id="nome" name="nome" required maxlength="100">

                    <label for="cpf">CPF</label>
                    <input type="text" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Formato Esperado: 000.000.000-00" id="cpf" name="cpf" required>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>

                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}" title="Formato Esperado: (00) 00000-0000">

                    <label for="data-nascimento">Data de Nascimento</label>
                    <input type="date" id="data-nascimento" name="data_nascimento" required>

                     <p><small>* Campos obrigatórios</small></p>

                </fieldset>

                <fieldset>
                    <legend>Local</legend>

                    <label for="endereco">Endereço</label>
                    <input type="text" id="endereco" name="endereco">

                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" name="cidade">

                    <label for="cep">cep</label>
                    <input type="text" pattern="\\d{5}-\\d{3}" title="Formato Esperado: 00000-000" id="cep" name="Cep">

                    <label for="estado">Estado</label>
                    <select id="estado" name="estado" required>
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </fieldset>

                <div class="acoes-formulario">
                  <button type="submit">Finalizar e Enviar</button>
                </div>
                <p><small>Seus dados serão utilizados apenas para fins de cadastro e não serão compartilhados com terceiros.</small></p>

                
        </form>
    </section> 
    `,
    cadastros: () => {
        const lista = listarCadastros();
        let itens = "";

        for (const c of lista) {
        itens += cartaoCadastro(c);
        }

        return `
        <section id="lista-cadastros">
        <h2>Cadastros recebidos</h2>
        <p>Total: ${lista.length}</p>
        ${itens}
        </section>
        `;
    },
    projetos: () => {
        let itens = "";

        for (const p of projetos) {
            itens += cartaoProjeto(p);
        }

        return `
        <section id="lista-projetos">
        <h2>Projetos ativos</h2>
        ${itens}
        </section>
        `;
    }   
};

