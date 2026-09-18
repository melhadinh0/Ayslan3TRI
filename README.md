# Gerenciador de Tarefas e Metas Diárias 🚀

Projeto prático desenvolvido para fixação de conteúdo da disciplina **Projeto de Interfaces para Web**, com foco aprofundado em **JavaScript Moderno (ES6+)**, manipulação de **DOM**, integração com **Bootstrap 5** e fundamentos de **jQuery**.

---

## 📋 Sobre o Projeto

O sistema é uma aplicação interativa de gerenciamento de tarefas (*To-Do List*) orientada a estado (*State-driven UI*), estruturada para demonstrar boas práticas de engenharia front-end e conceitos fundamentais do desenvolvimento web.

### 🌟 Funcionalidades Principais
- **Dashboard de Métricas**: Contadores dinâmicos de tarefas (*Total*, *Pendentes* e *Concluídas*) com barra de progresso percentual reativa.
- **Formulário com Validação Visual**: Campos para título da tarefa, nível de prioridade (Baixa, Média, Alta) e categoria, utilizando as classes de validação do Bootstrap 5.
- **Listagem Dinâmica**:
  - Cards de tarefas com estilização condicional de borda por prioridade.
  - Alternância de status (concluir/reabrir) com efeito de texto tachado.
  - Exclusão com animação suave de transição.
  - Filtros rápidos (*Todas*, *Pendentes*, *Concluídas*) e busca em tempo real por título ou categoria.
  - *Empty State* para quando não houver itens na visualização.
- **Persistência de Dados**: Armazenamento local no navegador via `localStorage` com suporte a `JSON.stringify` e `JSON.parse`.
- **Laboratório Educacional Vanilla JS vs jQuery**: Seção interativa demonstrando lado a lado a equivalência sintática entre JavaScript nativo e jQuery com botões de teste prático.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível.
- **CSS3**: Variáveis CSS (Custom Properties), Flexbox, transições e animações de entrada/saída.
- **Bootstrap 5.3.3**: Framework CSS para layout responsivo, sistema de grid, tipografia e feedback de validação.
- **Bootstrap Icons 1.11.3**: Ícones vetoriais modernos.
- **JavaScript (ES6+)**:
  - Escopo e imutabilidade com `const` e `let` (sem uso do obsoleto `var`).
  - Estrutura de dados com Array de Objetos para gestão de estado.
  - Seleção da DOM com `getElementById`, `querySelector` e `querySelectorAll`.
  - Manipulação de eventos com `addEventListener` e `event.preventDefault()`.
  - Padrão profissional de **Event Delegation**.
  - Métodos funcionais de iteração: `.forEach()`, `.filter()`, `.findIndex()`.
  - Template Literals e sanitização contra injeção de código (XSS).
- **jQuery 3.7.1**: Biblioteca utilizada para estudo comparativo de sintaxe, seleção com `$()` e efeitos visuais com `.fadeToggle()`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html       # Estrutura semântica da aplicação e links CDN
├── style.css        # Estilos customizados, tokens de design e animações
├── script.js        # Lógica da aplicação e guia pedagógico detalhado
└── README.md        # Documentação completa do projeto
```

---

## 🎓 Conteúdo Pedagógico: Vanilla JS vs jQuery

| Operação | Vanilla JavaScript (ES6+) | jQuery |
| :--- | :--- | :--- |
| **Seleção e Texto** | `document.getElementById('id').textContent = 'Valor';` | `$('#id').text('Valor');` |
| **Escuta de Evento** | `el.addEventListener('click', (e) => { e.preventDefault(); });` | `$(el).on('click', function(e) { e.preventDefault(); });` |
| **Animação / Fade** | `el.style.opacity = '0'; setTimeout(() => el.remove(), 300);` | `$(el).fadeOut(300, function() { $(this).remove(); });` |
| **Alternar Classe** | `el.classList.toggle('classe');` | `$(el).toggleClass('classe');` |

---

## 🚀 Como Executar Localmente

Não é necessário instalar dependências ou rodar comandos complexos de build:

1. Clone o repositório:
   ```bash
   git clone https://github.com/melhadinh0/Ayslan3TRI.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Ayslan3TRI.git
   ```
3. Abra o arquivo `index.html` em qualquer navegador web moderno:
   - No Windows: `start index.html`
   - Ou utilizando a extensão **Live Server** do VS Code / IDE.

---

## 👤 Autor

- **Usuário GitHub**: [@melhadinh0](https://github.com/melhadinh0)
- **E-mail**: [melhadocursos@gmail.com](mailto:melhadocursos@gmail.com)
- **Disciplina**: Projeto de Interfaces para Web
