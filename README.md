# JS Interactive Hub | Guia Prático & Live Playground ⚡

Aplicação web educacional interativa desenvolvida para a disciplina de **Projeto de Interfaces para Web**, estruturada para o estudo aprofundado, consulta rápida e execução em tempo real de **40 métodos e recursos essenciais do JavaScript Moderno (ES6 a ES2023)** e dos fundamentos comparativos de **jQuery**.

---

## 📋 Sobre o Projeto

O **JS Interactive Hub** oferece um ambiente dinâmico de aprendizado no formato *State-Driven Catalog* acompanhado de um **Live Playground** integrado para cada um dos 40 métodos catalogados.

Cada função e operador conta com:
- **Sintaxe & Propósito**: Descrição concisa e semântica de funcionamento.
- **Editor de Código Demonstrativo**: Snippet formatado com destaque visual e botão de cópia com um clique (`navigator.clipboard`).
- **Live Playground (Console Interativo)**: Mini-terminal de saída que executa a rotina JavaScript correspondente e exibe os dados de retorno formatados com tokens visuais coloridos e medição de tempo de execução (`performance.now()`).

---

## 🗂️ Catálogo Geral (40 Métodos em 6 Módulos)

| Categoria | Métodos & Recursos Catalogados | Foco Pedagógico Principal |
| :--- | :--- | :--- |
| **Manipulação de Arrays** *(10)* | `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `includes()`, `some()`, `every()`, `toSorted() [ES2023]`, `Array.from()` | Imutabilidade, predicados booleanos, ordenação pura e conversão de iteráveis. |
| **DOM & Geometria** *(7)* | `querySelector() / querySelectorAll()`, `addEventListener()`, `classList.toggle()`, `createElement()`, `closest()`, `dataset (data-*)`, `getBoundingClientRect()` | Navegação hierárquica, Event Delegation, coordenadas de tela e metadados HTML5. |
| **Objetos & JSON** *(8)* | `Object.keys()`, `Object.values()`, `Object.entries()`, `JSON.stringify()`, `JSON.parse()`, `structuredClone() [Deep Clone]`, `Spread (...)`, `Optional Chaining (?.) & Nullish (??)` | Extração de dados, desestruturação, clonagem profunda nativa e navegação defensiva. |
| **Storage & Assincronismo** *(7)* | `localStorage`, `sessionStorage`, `fetch()`, `Promise / async/await`, `Promise.all()`, `Promise.allSettled()`, `setTimeout() / setInterval()` | Persistência cliente, execução concorrente paralela, resiliência de Promises e Event Loop. |
| **Strings & Utilitários** *(5)* | `trim()`, `split()`, `replace() / replaceAll()`, `Template Literals`, `padStart() / padEnd()` | Sanitização de dados, máscaras de preenchimento, quebras por delimitador e interpolação. |
| **Moderno & Avançado** *(3)* | `Intl.NumberFormat`, `Destructuring Assignment`, `Rest Parameters & Spread em Funções` | Internacionalização de moedas (BRL/USD/EUR), descompactação com fallbacks e argumentos variáveis. |

---

## ⚖️ Laboratório Comparativo: Vanilla JS (ES6+) vs jQuery

O projeto inclui uma seção prática demonstrando as diferenças de sintaxe e o contexto histórico da transição de bibliotecas legadas para o JavaScript nativo:

| Ação | Vanilla JavaScript (ES6+) | jQuery (3.7.1) |
| :--- | :--- | :--- |
| **Seleção & Texto** | `document.querySelector('#el').textContent = 'Olá';` | `$('#el').text('Olá');` |
| **Escuta de Eventos** | `el.addEventListener('click', (e) => { e.preventDefault(); });` | `$(el).on('click', function(e) { e.preventDefault(); });` |
| **Consumo HTTP** | `const data = await (await fetch(url)).json();` | `$.ajax({ url, success: (data) => ... });` |
| **Animações / Fade** | `el.classList.toggle('fade-hidden');` (CSS transition) | `$(el).fadeToggle(350);` |

> **Contexto Histórico:** O jQuery (2006) unificou a Web e superou inconsistências graves entre navegadores antigos. Com a padronização e avanço contínuo do ECMAScript (ES6 a ES2023), os navegadores modernos absorveram essas funcionalidades de forma nativa e ultra-performática, tornando bibliotecas adicionais dispensáveis na maioria dos cenários contemporâneos.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Tags estruturais (`<header>`, `<main>`, `<section>`, `<footer>`), acessibilidade (ARIA labels e roles).
- **CSS3 Moderno**: CSS Variables (Custom Properties), Flexbox, CSS Grid, animações e tema Dark Editor.
- **Bootstrap 5.3.3 (CDN)**: Sistema de grid responsivo, tipografia e componentes visuais.
- **Bootstrap Icons 1.11.3 (CDN)**: Conjunto de ícones para navegação intuitiva.
- **JavaScript Moderno (ES6 a ES2023)**:
  - Arquitetura orientada a estado (*State-Driven Catalog*).
  - Padrão **Event Delegation** para gerenciamento de ações nos cards.
  - Funções assíncronas com `async/await` e `Promise`.
  - Sanitização preventiva de saídas contra ataques de injeção (XSS).
- **jQuery 3.7.1 (CDN)**: Utilizado no laboratório comparativo para demonstração prática de equivalência sintática.

---

## 🚀 Como Executar e Visualizar

O projeto possui arquitetura **Zero-Build Step**:

### Opção 1: Servidor Local Nativo (Node.js)
```powershell
node serve.js
# Acesse no navegador: http://127.0.0.1:3000
```

### Opção 2: Abertura Direta no Navegador
```powershell
start index.html
```

---

## 👤 Informações do Projeto

- **Disciplina**: Projeto de Interfaces para Web
- **Repositório GitHub**: [https://github.com/melhadinh0/Ayslan3TRI.git](https://github.com/melhadinh0/Ayslan3TRI.git)
- **Usuário GitHub**: [@melhadinh0](https://github.com/melhadinh0)
- **E-mail**: [melhadocursos@gmail.com](mailto:melhadocursos@gmail.com)
