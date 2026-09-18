# JS Interactive Hub | Guia Prático & Live Playground ⚡

Aplicação web educacional interativa desenvolvida para a disciplina de **Projeto de Interfaces para Web**, estruturada para o estudo aprofundado, consulta rápida e execução em tempo real dos métodos essenciais do **JavaScript Moderno (ES6+)** e dos fundamentos comparativos de **jQuery**.

---

## 📋 Sobre o Projeto

O **JS Interactive Hub** substitui abordagens teóricas estáticas por um ambiente dinâmico de aprendizado no formato *State-Driven Catalog* acompanhado de um **Live Playground** integrado a cada função.

Cada método catalogado conta com:
- **Sintaxe & Propósito**: Descrição concisa e semântica de funcionamento.
- **Editor de Código Demonstrativo**: Snippet formatado com destaque visual e botão de cópia com um clique (`navigator.clipboard`).
- **Live Playground (Console Interativo)**: Um mini-terminal de saída que executa a rotina JavaScript correspondente e exibe os dados de retorno formatados com tokens visuais coloridos e medição de tempo de execução (`performance.now()`).

---

## 🗂️ Catálogo de Categorias e Métodos Cobertos

A plataforma cataloga **22 métodos essenciais** distribuídos em 5 categorias temáticas:

| Categoria | Métodos Catalogados | Descrição |
| :--- | :--- | :--- |
| **Manipulação de Arrays** | `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `includes()` | Métodos funcionais de alta ordem para transformação, filtragem e agregação de coleções sem mutabilidade indesejada. |
| **DOM & Eventos** | `querySelector()`, `addEventListener()`, `classList.toggle()`, `createElement()` | Seleção padrão W3C, manipulação dinâmica de nós na árvore do DOM e escuta assíncrona de eventos com boas práticas de desacoplamento. |
| **Objetos & JSON** | `Object.keys()`, `Object.entries()`, `JSON.stringify()`, `JSON.parse()` | Extração de propriedades, desestruturação de pares chave-valor e serialização/deserialização para transmissão e persistência. |
| **Storage & Assincronismo** | `localStorage (setItem / getItem)`, `fetch()`, `Promise` / `async/await` | Persistência local no navegador, consumo de APIs REST remotas e resolução de fluxos assíncronos não-bloqueantes. |
| **Strings & Utilitários** | `trim()`, `split()`, `replace()`, `Template Literals` | Sanitização de strings, conversão para arrays delimitados, substituição de texto e interpolação dinâmica com crases (`` `...` ``). |

---

## ⚖️ Laboratório Comparativo: Vanilla JS (ES6+) vs jQuery

O projeto inclui uma seção prática demonstrando as diferenças de sintaxe e o contexto histórico da transição de bibliotecas legadas para o JavaScript nativo:

| Ação | Vanilla JavaScript (ES6+) | jQuery (3.7.1) |
| :--- | :--- | :--- |
| **Seleção & Texto** | `document.querySelector('#el').textContent = 'Olá';` | `$('#el').text('Olá');` |
| **Escuta de Eventos** | `el.addEventListener('click', (e) => { e.preventDefault(); });` | `$(el).on('click', function(e) { e.preventDefault(); });` |
| **Consumo HTTP** | `const data = await (await fetch(url)).json();` | `$.ajax({ url, success: (data) => ... });` |
| **Animações / Fade** | `el.classList.toggle('fade-hidden');` (CSS transition) | `$(el).fadeToggle(350);` |

> **Contexto Histórico:** O jQuery (2006) unificou a Web e superou inconsistências graves entre navegadores antigos. Com a padronização e avanço contínuo do ECMAScript (ES6+), os navegadores modernos absorveram essas funcionalidades de forma nativa e ultra-performática, tornando bibliotecas adicionais dispensáveis na maioria dos cenários contemporâneos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Tags estruturais (`<header>`, `<main>`, `<section>`, `<footer>`), acessibilidade (ARIA labels e roles).
- **CSS3 Moderno**: CSS Variables (Custom Properties), Flexbox, CSS Grid, animações e estilo Dark Editor para snippets de código.
- **Bootstrap 5.3.3 (CDN)**: Sistema de grid responsivo, tipografia e componentes visuais.
- **Bootstrap Icons 1.11.3 (CDN)**: Conjunto de ícones para navegação intuitiva.
- **JavaScript Moderno (ES6+)**:
  - Arquitetura orientada a estado (*State-Driven Catalog*).
  - Padrão **Event Delegation** para gerenciamento de ações nos cards.
  - Funções assíncronas com `async/await` e `Promise`.
  - Sanitização preventiva de saídas contra ataques de injeção (XSS).
- **jQuery 3.7.1 (CDN)**: Utilizado no laboratório comparativo para demonstração prática de equivalência sintática.

---

## 🚀 Como Executar Localmente

O projeto possui arquitetura **Zero-Build Step** (não exige Node.js, npm ou ferramentas de empacotamento para ser utilizado):

1. Clone o repositório:
   ```bash
   git clone https://github.com/melhadinh0/Ayslan3TRI.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Ayslan3TRI.git
   ```
3. Abra o arquivo `index.html` diretamente no seu navegador preferido:
   - No Windows:
     ```powershell
     start index.html
     ```
   - Ou utilizando extensões de servidor local como o **Live Server** no VS Code / Antigravity IDE.

---

## 👤 Informações do Projeto

- **Disciplina**: Projeto de Interfaces para Web
- **Repositório GitHub**: [https://github.com/melhadinh0/Ayslan3TRI.git](https://github.com/melhadinh0/Ayslan3TRI.git)
- **Usuário GitHub**: [@melhadinh0](https://github.com/melhadinh0)
- **E-mail**: [melhadocursos@gmail.com](mailto:melhadocursos@gmail.com)
