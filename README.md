# SOS Mata Atlântica

Site institucional de uma ONG ambiental, construído como projeto acadêmico da disciplina de Desenvolvimento Front-end. O site é uma **Single Page Application (SPA)** feita com HTML, CSS e JavaScript puros, sem back-end.

🔗 **Site publicado:** https://alanmartinsnascm.github.io/SOS-MATA-ATL-NTICA/#/inicio

## Funcionalidades

- **Navegação sem recarregar a página**, com roteamento por hash (`#/inicio`, `#/cadastro`, `#/cadastros`, `#/projetos`).
- **Página inicial** com apresentação da ONG, contato e história.
- **Formulário de cadastro** com validação nativa (`required`, `pattern`) e validação em JavaScript, com mensagens por campo, feedback em tempo real e máscara de CPF.
- **Persistência com `localStorage`**: os cadastros ficam guardados no navegador, e a lista e o contador do menu são restaurados ao abrir a página.
- **Listagem de cadastros e de projetos** gerada por um sistema de templates em JavaScript.
- **Menu responsivo** com submenu no desktop e ícone hambúrguer no celular.
- **Layout responsivo** com CSS Grid e Flexbox e cinco pontos de quebra.
- **Acessibilidade em conformidade com o WCAG 2.1, nível AA**: contraste de cores verificado, navegação completa por teclado, rótulos em todos os campos, textos alternativos nas imagens e estrutura de títulos consistente.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis customizadas, Grid, Flexbox, media queries)
- JavaScript (ES6), sem framework
- [Day.js](https://day.js.org/) (via CDN) para formatar datas

## Estrutura de pastas

```
sos-mata-atlantica/
├── index.html     # casca da SPA (cabeçalho, menu, rodapé e a área #app)
├── html/          # versões estáticas das páginas
├── css/           # style.css (Design System, layout e componentes)
├── img/           # imagens do site
└── js/            # código dividido por responsabilidade
    ├── router.js      # navegação por hash e renderização
    ├── templates.js   # telas da SPA
    ├── cartoes.js     # componentes reutilizáveis (cartões)
    ├── dados.js       # dados dos projetos
    ├── storage.js     # acesso ao localStorage
    ├── validacao.js   # regras e feedback de validação
    ├── mascaras.js    # formatação de campos
    ├── cadastro.js    # eventos do formulário
    ├── modal.js       # abertura/fechamento de modais (clique e tecla Esc)
    └── menu.js        # comportamento do menu e contador
```

## Como executar

**Opção 1 — acessar o site publicado:** https://alanmartinsnascm.github.io/SOS-MATA-ATL-NTICA/#/inicio

**Opção 2 — rodar localmente**, sem instalação nem etapa de build:

1. Clone o repositório:
   ```
   git clone https://github.com/Alanmartinsnascm/SOS-MATA-ATL-NTICA.git
   ```
2. Abra o arquivo `index.html` no navegador (duplo clique).

A biblioteca Day.js é carregada pela internet. Sem conexão, o site continua funcionando e usa a formatação de datas nativa do navegador.

## Como usar

- Use o menu para navegar entre Início, Cadastro, Cadastros e Projetos.
- No **Cadastro**, preencha os dados e envie. O cadastro é guardado no navegador.
- Em **Cadastros**, veja a lista dos cadastros enviados.
- Para apagar os dados guardados, abra o Console do navegador (F12) e execute `localStorage.removeItem("cadastros")`.

> Os dados ficam apenas no navegador de quem usa e **não são criptografados**. Este projeto é didático e não deve ser usado para dados reais.

## Manutenção

- **Estilos:** as cores, tamanhos de fonte e espaçamentos ficam como variáveis no `:root` do `css/style.css`. Para mudar o visual do site, altere as variáveis.
- **Novos projetos na lista:** acrescente um objeto (`titulo`, `categoria`, `descricao`) em `js/dados.js`.
- **Novas telas:** adicione um item ao objeto `paginas` em `js/templates.js` e um link no menu do `index.html` (`#/nome-da-rota`).
- Os scripts são carregados em ordem no final do `index.html`, e a ordem respeita as dependências entre os arquivos.

## Fluxo de trabalho (Git)

O repositório segue o modelo GitFlow:

- `main`: versões estáveis, prontas para publicação.
- `develop`: integração do desenvolvimento.
- `feature/*`: uma funcionalidade ou tarefa por ramo, integrada ao `develop` por pull request.
- `hotfix/*`: correções urgentes a partir do `main`.

As mensagens de commit seguem o padrão `tipo: descrição` (`feat`, `fix`, `docs`, `chore`).

## Versionamento

O projeto segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/) (`MAJOR.MINOR.PATCH`). A versão atual é a [`v1.0.0`](https://github.com/Alanmartinsnascm/SOS-MATA-ATL-NTICA/releases/tag/v1.0.0), a primeira versão estável e publicada do projeto.

## Autor

Projeto desenvolvido por [@Alanmartinsnascm](https://github.com/Alanmartinsnascm).
