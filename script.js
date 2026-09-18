/**
 * ============================================================================
 * JS INTERACTIVE HUB - GUIA DIDÁTICO & LIVE PLAYGROUND (40 MÉTODOS ES6-ES2023)
 * ============================================================================
 * Disciplina: Projeto de Interfaces para Web
 * Autor: Engenheiro Front-end Sênior & Especialista Pedagógico em JavaScript
 * 
 * OBJETIVO:
 * Plataforma educacional completa para consulta e teste prático de 40 métodos,
 * operadores e APIs essenciais do ecossistema JavaScript moderno, divididos
 * em 6 módulos temáticos com mini-consoles em tempo real e comparativo com jQuery.
 * ============================================================================
 */

/* ============================================================================
 * 1. BASE DE CONHECIMENTO E CATÁLOGO DE MÉTODOS (STATE-DRIVEN CATALOG)
 * ============================================================================
 */
const jsCatalog = [

  // --------------------------------------------------------------------------
  // GRUPO 1: MANIPULAÇÃO DE ARRAYS (10 MÉTODOS)
  // --------------------------------------------------------------------------
  {
    id: 'arr-map',
    name: 'Array.prototype.map()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const novoArray = arr.map((item, index) => novoValor);',
    description: 'Transforma cada elemento de um array através de uma função de callback, gerando um NOVO array com o mesmo comprimento, sem alterar o array original (imutabilidade).',
    codeSnippet: `const precosReais = [10, 25.5, 80, 150];
// Aplica 10% de acréscimo em cada item
const precosComTaxa = precosReais.map(preco => {
  return Number((preco * 1.10).toFixed(2));
});

console.log("Original:", precosReais);
console.log("Com taxa:", precosComTaxa);`,
    runExample: () => {
      const precosReais = [10, 25.5, 80, 150];
      const precosComTaxa = precosReais.map(preco => Number((preco * 1.10).toFixed(2)));
      return {
        type: 'Array',
        result: precosComTaxa,
        explanation: `Array resultante (4 itens transformados): [${precosComTaxa.join(', ')}]`
      };
    }
  },

  {
    id: 'arr-filter',
    name: 'Array.prototype.filter()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const filtrados = arr.filter((item) => condicaoBooleana);',
    description: 'Cria um novo array contendo apenas os elementos que satisfazem a condição lógica fornecida (retornam true no predicado). Não modifica o array de origem.',
    codeSnippet: `const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carla", nota: 9.0 },
  { nome: "Diego", nota: 6.2 }
];

// Filtra apenas aprovados (nota >= 7.0)
const aprovados = alunos.filter(aluno => aluno.nota >= 7.0);
console.log(aprovados);`,
    runExample: () => {
      const alunos = [
        { nome: "Ana", nota: 8.5 },
        { nome: "Bruno", nota: 5.0 },
        { nome: "Carla", nota: 9.0 },
        { nome: "Diego", nota: 6.2 }
      ];
      const aprovados = alunos.filter(aluno => aluno.nota >= 7.0);
      return {
        type: 'Array de Objetos',
        result: aprovados,
        explanation: `Filtro concluído: ${aprovados.length} de ${alunos.length} alunos foram aprovados.`
      };
    }
  },

  {
    id: 'arr-reduce',
    name: 'Array.prototype.reduce()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const acumulado = arr.reduce((acc, curr) => acc + curr, valorInicial);',
    description: 'Itera sobre uma coleção e reduz todos os elementos a um único valor final acumulado (número, string, objeto agrupado ou array condensado).',
    codeSnippet: `const carrinho = [
  { item: "Teclado Mecânico", preco: 250 },
  { item: "Mouse Gamer", preco: 150 },
  { item: "Mousepad", preco: 50 }
];

// Acumula a soma de todos os preços iniciando em zero
const totalPedido = carrinho.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0);

console.log("Total: R$", totalPedido);`,
    runExample: () => {
      const carrinho = [
        { item: "Teclado Mecânico", preco: 250 },
        { item: "Mouse Gamer", preco: 150 },
        { item: "Mousepad", preco: 50 }
      ];
      const total = carrinho.reduce((acc, p) => acc + p.preco, 0);
      return {
        type: 'Number',
        result: total,
        explanation: `Valor total calculado: R$ ${total.toFixed(2)} (acumulado a partir de 3 itens)`
      };
    }
  },

  {
    id: 'arr-foreach',
    name: 'Array.prototype.forEach()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'arr.forEach((item, index) => { /* efeito colateral */ });',
    description: 'Executa uma função para cada elemento do array. É indicado para ações de efeitos colaterais (side-effects), como logs, manipulações no DOM ou disparos de eventos. Sempre retorna undefined.',
    codeSnippet: `const logs = [];
const tecnologias = ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"];

tecnologias.forEach((tech, i) => {
  logs.push(\`#\${i + 1}: Módulo de \${tech}\`);
});

console.log(logs.join("\\n"));`,
    runExample: () => {
      const tecnologias = ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"];
      const logs = [];
      tecnologias.forEach((tech, i) => {
        logs.push(`Módulo ${i + 1} -> ${tech}`);
      });
      return {
        type: 'Side-Effect (Logs gerados)',
        result: logs,
        explanation: `Iteração completa sobre ${tecnologias.length} itens executada.`
      };
    }
  },

  {
    id: 'arr-find',
    name: 'Array.prototype.find()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const itemEncontrado = arr.find((item) => condicao);',
    description: 'Retorna o PRIMEIRO elemento do array que satisfaz a condição de teste. Se nenhum elemento satisfizer a condição, retorna undefined. Não continua a varredura após o primeiro achado (otimização de busca).',
    codeSnippet: `const usuarios = [
  { id: 101, nome: "Lucas", nivel: "user" },
  { id: 102, nome: "Beatriz", nivel: "admin" },
  { id: 103, nome: "Thiago", nivel: "user" }
];

// Localiza o primeiro usuário que possua nível "admin"
const admin = usuarios.find(u => u.nivel === "admin");
console.log(admin);`,
    runExample: () => {
      const usuarios = [
        { id: 101, nome: "Lucas", nivel: "user" },
        { id: 102, nome: "Beatriz", nivel: "admin" },
        { id: 103, nome: "Thiago", nivel: "user" }
      ];
      const admin = usuarios.find(u => u.nivel === "admin");
      return {
        type: 'Object',
        result: admin,
        explanation: `Elemento encontrado: ${admin.nome} (ID: ${admin.id})`
      };
    }
  },

  {
    id: 'arr-includes',
    name: 'Array.prototype.includes()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const existe = arr.includes(valorBuscado);',
    description: 'Determina se um array contém um determinado elemento primitivo, retornando true ou false. É uma alternativa muito mais legível e segura do que o antigo "arr.indexOf(item) !== -1".',
    codeSnippet: `const permissoesValidas = ["LEITURA", "GRAVACAO", "ADMIN"];

const usuarioAcesso = "ADMIN";
const podeAcessar = permissoesValidas.includes(usuarioAcesso);

console.log("Tem permissão?", podeAcessar); // true`,
    runExample: () => {
      const permissoesValidas = ["LEITURA", "GRAVACAO", "ADMIN"];
      const teste1 = permissoesValidas.includes("ADMIN");
      const teste2 = permissoesValidas.includes("ROOT");
      return {
        type: 'Boolean',
        result: { 'includes("ADMIN")': teste1, 'includes("ROOT")': teste2 },
        explanation: `Verificação booleana exata realizada.`
      };
    }
  },

  {
    id: 'arr-some',
    name: 'Array.prototype.some()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const peloMenosUm = arr.some((item) => condicao);',
    description: 'Verifica se AO MENOS UM dos elementos do array satisfaz a condição lógica. Interrompe a execução assim que encontra o primeiro item verdadeiro (Short-circuit evaluation), retornando true.',
    codeSnippet: `const tarefas = [
  { id: 1, titulo: "Relatório", prioridade: "baixa" },
  { id: 2, titulo: "Deploy Servidor", prioridade: "alta" },
  { id: 3, titulo: "Backup", prioridade: "media" }
];

// Há alguma tarefa urgente?
const temUrgente = tarefas.some(t => t.prioridade === "alta");
console.log("Existe prioridade alta?", temUrgente); // true`,
    runExample: () => {
      const tarefas = [
        { id: 1, prioridade: "baixa" },
        { id: 2, prioridade: "alta" },
        { id: 3, prioridade: "media" }
      ];
      const temAlta = tarefas.some(t => t.prioridade === "alta");
      const temCritica = tarefas.some(t => t.prioridade === "critica");
      return {
        type: 'Boolean',
        result: { 'possuiPrioridadeAlta': temAlta, 'possuiPrioridadeCritica': temCritica },
        explanation: 'some() retorna true se encontrar ao menos 1 ocorrência compatível.'
      };
    }
  },

  {
    id: 'arr-every',
    name: 'Array.prototype.every()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const todosConformes = arr.every((item) => condicao);',
    description: 'Testa se TODOS os elementos do array passam rigorosamente no teste lógico implementado pela função fornecida. Retorna false imediatamente ao encontrar a primeira falha.',
    codeSnippet: `const idades = [19, 24, 32, 18, 45];

// Todos são maiores de idade (>= 18)?
const todosMaiores = idades.every(idade => idade >= 18);
console.log("Todos aptos?", todosMaiores); // true`,
    runExample: () => {
      const idades = [19, 24, 32, 18, 45];
      const todasMaiorIdade = idades.every(i => i >= 18);
      const todasAcimaDe30 = idades.every(i => i >= 30);
      return {
        type: 'Boolean',
        result: { 'todosMaiores18': todasMaiorIdade, 'todosAcima30': todasAcimaDe30 },
        explanation: 'every() só é verdadeiro quando 100% da coleção satisfaz o predicado.'
      };
    }
  },

  {
    id: 'arr-tosorted',
    name: 'Array.prototype.toSorted() (ES2023)',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const ordenado = arr.toSorted((a, b) => a - b);',
    description: 'Introduzido na especificação oficial ES2023! Diferente do tradicional .sort() que muta o array de origem no local, o .toSorted() retorna uma NOVA cópia ordenada, preservando o array original intacto.',
    codeSnippet: `const pontuacoes = [40, 100, 1, 5, 25, 10];

// Ordena numericamente em ordem decrescente sem alterar o original
const ranking = pontuacoes.toSorted((a, b) => b - a);

console.log("Original intacto:", pontuacoes);
console.log("Novo ordenado:", ranking);`,
    runExample: () => {
      const original = [40, 100, 1, 5, 25, 10];
      // Fallback seguro caso o browser ainda não tenha toSorted nativo
      const ordenado = typeof original.toSorted === 'function' ? 
        original.toSorted((a, b) => b - a) : 
        [...original].sort((a, b) => b - a);
      return {
        type: 'Array Imutável (ES2023)',
        result: { originalIntacto: original, novoOrdenado: ordenado },
        explanation: 'toSorted() garante pureza funcional e evita efeitos colaterais de mutação.'
      };
    }
  },

  {
    id: 'arr-from',
    name: 'Array.from()',
    category: 'arrays',
    categoryLabel: 'Manipulação de Arrays',
    badgeClass: 'bg-primary',
    syntax: 'const arrayReal = Array.from(iteravel, mapFn);',
    description: 'Cria uma nova instância de Array a partir de qualquer objeto iterável (NodeList, Set, Map, String) ou array-like (com propriedade length), opcionalmente aplicando uma função de mapeamento inline.',
    codeSnippet: `// 1. Converte uma string em array de caracteres maiúsculos
const letras = Array.from("web", char => char.toUpperCase());
console.log(letras); // ["W", "E", "B"]

// 2. Cria sequência numérica de 1 a 5 sem loop for
const numeros = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(numeros); // [1, 2, 3, 4, 5]`,
    runExample: () => {
      const letras = Array.from("javascript", c => c.toUpperCase());
      const sequencia = Array.from({ length: 6 }, (_, i) => (i + 1) * 10);
      return {
        type: 'Array Convertido',
        result: { letras, sequencia },
        explanation: 'Excelente para transformar NodeLists da DOM em arrays reais com métodos como .map().'
      };
    }
  },

  // --------------------------------------------------------------------------
  // GRUPO 2: MANIPULAÇÃO DE DOM & GEOMETRIA (7 MÉTODOS)
  // --------------------------------------------------------------------------
  {
    id: 'dom-query-selector',
    name: 'document.querySelector() / querySelectorAll()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const el = document.querySelector("#id .classe[atributo]");',
    description: 'Método padrão moderno para selecionar elementos no DOM utilizando qualquer seletor CSS válido. Retorna o primeiro nó correspondente ou null. A versão querySelectorAll() retorna uma NodeList estática.',
    codeSnippet: `// Seleciona o primeiro botão primário da página
const btn = document.querySelector("button.btn-warning");

// Captura todos os elementos com a classe .category-pill
const pills = document.querySelectorAll(".category-pill");
console.log("Pills encontradas:", pills.length);`,
    runExample: () => {
      const pills = document.querySelectorAll('.category-pill');
      const headerTitle = document.querySelector('h1')?.textContent?.trim();
      return {
        type: 'DOM Elements',
        result: {
          elementoCapturado: headerTitle,
          totalPillsNoDOM: pills.length
        },
        explanation: `Seleção realizada com sucesso no DOM desta página.`
      };
    }
  },

  {
    id: 'dom-add-event-listener',
    name: 'EventTarget.addEventListener()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'elemento.addEventListener("evento", (event) => { ... });',
    description: 'Registra uma função de retorno (callback) para ser executada sempre que o evento especificado (click, input, submit, keydown) for disparado sobre o elemento, mantendo a separação entre JS e HTML.',
    codeSnippet: `const inputBusca = document.querySelector("#searchInput");

inputBusca.addEventListener("input", (e) => {
  // A cada tecla digitada pelo usuário:
  console.log("Termo buscado:", e.target.value);
});`,
    runExample: () => {
      return {
        type: 'Event Registration',
        result: {
          tipoEvento: 'input / click',
          metodoNativo: 'addEventListener',
          vantagem: 'Permite múltiplos ouvintes sem sobrescrever handlers existentes.'
        },
        explanation: 'Mecanismo padrão da W3C para escuta assíncrona de eventos de usuário.'
      };
    }
  },

  {
    id: 'dom-classlist-toggle',
    name: 'Element.classList.toggle()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const estaPresente = elemento.classList.toggle("classeCss");',
    description: 'Alterna a presença de uma classe CSS no elemento: se a classe existir, ela é removida e retorna false; se não existir, é adicionada e retorna true. Fundamental para alternar temas, abas e modais.',
    codeSnippet: `const elemento = document.querySelector("#demoAnimationTarget");

// Alterna a classe de opacidade
elemento.classList.toggle("fade-hidden");`,
    runExample: () => {
      const target = document.querySelector('#demoAnimationTarget');
      let status = 'Elemento não localizado';
      if (target) {
        const ativo = target.classList.toggle('bg-opacity-50');
        status = ativo ? 'Classe adicionada (opacidade alterada)' : 'Classe removida (estado original)';
      }
      return {
        type: 'Boolean / CSS State',
        result: status,
        explanation: 'Classe CSS alternada diretamente no elemento de teste do laboratório!'
      };
    }
  },

  {
    id: 'dom-create-element',
    name: 'document.createElement()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const novoNo = document.createElement("div"); pai.appendChild(novoNo);',
    description: 'Cria um novo nó de elemento HTML na memória do navegador. O elemento pode ser customizado com classes, estilos e eventos antes de ser inserido na árvore DOM via appendChild ou append.',
    codeSnippet: `const novaBadge = document.createElement("span");
novaBadge.classList.add("badge", "bg-primary", "rounded-pill");
novaBadge.textContent = "Novo Módulo";

// Insere no container desejado
// document.body.appendChild(novaBadge);`,
    runExample: () => {
      const span = document.createElement('span');
      span.className = 'badge bg-success';
      span.textContent = 'Elemento Gerado Dinamicamente';
      return {
        type: 'HTMLElement',
        result: span.outerHTML,
        explanation: 'Nó HTML criado na memória com atributos e pronto para renderização.'
      };
    }
  },

  {
    id: 'dom-closest',
    name: 'Element.closest()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const ancestral = elemento.closest(".classe-pai");',
    description: 'Inicia a busca no elemento atual e sobe pela árvore genealógica do DOM até encontrar o ancestral mais próximo que atenda ao seletor CSS fornecido. É o coração do padrão Event Delegation!',
    codeSnippet: `// Ao clicar em um ícone <i> dentro de um botão <button class="btn-card">:
document.addEventListener("click", (e) => {
  const cardPai = e.target.closest(".function-card");
  if (cardPai) {
    console.log("ID do card clicado:", cardPai.dataset.id);
  }
});`,
    runExample: () => {
      const botaoExemplo = document.querySelector('[data-action="run"]');
      const cardEncontrado = botaoExemplo ? botaoExemplo.closest('.function-card') : null;
      return {
        type: 'DOM Ancestral',
        result: {
          elementoAlvo: 'Botão data-action="run"',
          ancestralMaisProximo: cardEncontrado ? cardEncontrado.className : 'Não localizado'
        },
        explanation: 'closest() sobe a árvore hierárquica do DOM instantaneamente.'
      };
    }
  },

  {
    id: 'dom-dataset',
    name: 'HTMLElement.dataset (data-* attributes)',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const valor = elemento.dataset.meuParametro; elemento.dataset.novo = "123";',
    description: 'Fornece acesso de leitura e escrita a todos os atributos personalizados de dados (data-*) definidos no elemento HTML, mapeando-os automaticamente para propriedades em formato camelCase.',
    codeSnippet: `// HTML: <button id="btnPlay" data-category="arrays" data-item-id="105">Play</button>
const btn = document.querySelector("#btnPlay");

console.log(btn.dataset.category); // "arrays"
console.log(btn.dataset.itemId);   // "105" (converte data-item-id para itemId)`,
    runExample: () => {
      const primeiroCard = document.querySelector('.function-card');
      const dataId = primeiroCard ? primeiroCard.dataset.id : 'arr-map';
      return {
        type: 'DOMStringMap',
        result: { datasetId: dataId, formato: 'Objeto Chave-Valor HTML5 data-*' },
        explanation: 'dataset permite armazenar metadados sem poluir a estrutura semântica.'
      };
    }
  },

  {
    id: 'dom-bounding-rect',
    name: 'Element.getBoundingClientRect()',
    category: 'dom',
    categoryLabel: 'DOM & Geometria',
    badgeClass: 'bg-success',
    syntax: 'const rect = elemento.getBoundingClientRect();',
    description: 'Retorna as dimensões exatas de um elemento (width, height) e sua posição espacial (top, right, bottom, left, x, y) relativa à área visível do navegador (viewport). Essencial para tooltips, modais e scroll spies.',
    codeSnippet: `const header = document.querySelector("header.hero-header");
const dimensao = header.getBoundingClientRect();

console.log(\`Altura: \${dimensao.height}px | Largura: \${dimensao.width}px\`);
console.log(\`Distância do topo: \${dimensao.top}px\`);`,
    runExample: () => {
      const header = document.querySelector('header.hero-header');
      if (!header) return { type: 'Geometria', result: 'Header não encontrado' };
      const r = header.getBoundingClientRect();
      return {
        type: 'DOMRect (Geometria)',
        result: {
          largura: `${Math.round(r.width)} px`,
          altura: `${Math.round(r.height)} px`,
          distanciaDoTopo: `${Math.round(r.top)} px`,
          posicaoY: `${Math.round(r.y)} px`
        },
        explanation: 'Coordenadas espaciais calculadas diretamente pelo motor de renderização.'
      };
    }
  },

  // --------------------------------------------------------------------------
  // GRUPO 3: OBJETOS E JSON (8 MÉTODOS & RECURSOS)
  // --------------------------------------------------------------------------
  {
    id: 'obj-keys',
    name: 'Object.keys()',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const chaves = Object.keys(objeto);',
    description: 'Retorna um array contendo os nomes de todas as propriedades enumeráveis (chaves) do próprio objeto, na mesma ordem fornecida por um loop.',
    codeSnippet: `const curso = {
  disciplina: "Projeto de Interfaces para Web",
  cargaHoraria: 60,
  ativo: true,
  semestre: "3º Tri"
};

const campos = Object.keys(curso);
console.log("Propriedades:", campos);
// ['disciplina', 'cargaHoraria', 'ativo', 'semestre']`,
    runExample: () => {
      const curso = {
        disciplina: "Projeto de Interfaces para Web",
        cargaHoraria: 60,
        ativo: true,
        semestre: "3º Tri"
      };
      const keys = Object.keys(curso);
      return {
        type: 'Array de Strings',
        result: keys,
        explanation: `Objeto possui ${keys.length} propriedades: [${keys.join(', ')}]`
      };
    }
  },

  {
    id: 'obj-values',
    name: 'Object.values()',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const valores = Object.values(objeto);',
    description: 'Retorna um array com os valores de todas as propriedades enumeráveis de um objeto. Complementa perfeitamente o Object.keys() para extração direta de dados.',
    codeSnippet: `const estoque = { notebook: 15, monitor: 8, teclado: 42 };

// Extrai somente as quantidades numéricas
const quantidades = Object.values(estoque);
const totalItens = quantidades.reduce((acc, q) => acc + q, 0);

console.log("Quantidades:", quantidades); // [15, 8, 42]
console.log("Total geral:", totalItens);  // 65`,
    runExample: () => {
      const estoque = { notebook: 15, monitor: 8, teclado: 42 };
      const vals = Object.values(estoque);
      const total = vals.reduce((a, b) => a + b, 0);
      return {
        type: 'Array de Valores',
        result: { valoresExtraidos: vals, somaTotal: total },
        explanation: 'Valores extraídos diretamente sem necessidade de iterar com loop for...in.'
      };
    }
  },

  {
    id: 'obj-entries',
    name: 'Object.entries()',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const pares = Object.entries(objeto);',
    description: 'Retorna um array com os pares [chave, valor] do próprio objeto. Facilita o uso de desestruturação com laços for...of ou métodos de array como .map().',
    codeSnippet: `const pontuacoes = { player1: 100, player2: 250, player3: 85 };

// Percorre os pares com desestruturação [jogador, pontos]
Object.entries(pontuacoes).forEach(([jogador, pontos]) => {
  console.log(\`\${jogador} fez \${pontos} pts\`);
});`,
    runExample: () => {
      const pontuacoes = { player1: 100, player2: 250, player3: 85 };
      const entries = Object.entries(pontuacoes);
      return {
        type: 'Matriz / Array de Pares',
        result: entries,
        explanation: 'Pares [chave, valor] extraídos para iteração ou mapeamento direto.'
      };
    }
  },

  {
    id: 'json-stringify',
    name: 'JSON.stringify()',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const stringJson = JSON.stringify(objeto, replacer, espacamento);',
    description: 'Serializa um valor ou objeto JavaScript em uma string formatada em JSON (JavaScript Object Notation). Essencial para enviar dados via HTTP ou salvar no localStorage.',
    codeSnippet: `const configUsuario = {
  tema: "dark",
  notificacoes: true,
  linguagem: "pt-BR"
};

// Converte para String JSON legível
const jsonString = JSON.stringify(configUsuario, null, 2);
console.log(typeof jsonString); // "string"`,
    runExample: () => {
      const configUsuario = {
        tema: "dark",
        notificacoes: true,
        linguagem: "pt-BR",
        ultimaSessao: new Date().toLocaleTimeString('pt-BR')
      };
      const jsonStr = JSON.stringify(configUsuario, null, 2);
      return {
        type: 'String (JSON formatado)',
        result: jsonStr,
        explanation: 'Estrutura serializada com sucesso em formato padrão internacional JSON.'
      };
    }
  },

  {
    id: 'json-parse',
    name: 'JSON.parse()',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const objetoJs = JSON.parse(textoEmFormatoJson);',
    description: 'Analisa uma string no padrão JSON e reconstrói o valor ou objeto nativo correspondente em memória JavaScript. Lança um SyntaxError caso a string não seja um JSON válido.',
    codeSnippet: `const dadosBrutos = '{"nome":"Ayslan","modulo":"Interfaces Web","ativo":true}';

// Converte string de volta para objeto real
const usuario = JSON.parse(dadosBrutos);
console.log("Nome acessado:", usuario.nome); // "Ayslan"`,
    runExample: () => {
      const raw = '{"nome":"Ayslan","modulo":"Interfaces Web","ativo":true,"pontos":95}';
      const parsed = JSON.parse(raw);
      return {
        type: 'Object Reconstruído',
        result: parsed,
        explanation: `Propriedade acessada diretamente no objeto: parsed.nome = "${parsed.nome}"`
      };
    }
  },

  {
    id: 'obj-structured-clone',
    name: 'structuredClone() (Deep Clone Nativo)',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const copiaProfunda = structuredClone(objetoComplexo);',
    description: 'API nativa do JavaScript moderno para clonagem profunda (Deep Copy). Ao contrário de JSON.parse(JSON.stringify()), suporta com perfeição datas (Date), Sets, Maps, expressões regulares e estruturas aninhadas.',
    codeSnippet: `const original = {
  usuario: "Dev",
  detalhes: { nivel: "Senior", dataCriacao: new Date() }
};

// Cria uma cópia profunda 100% desconectada
const clone = structuredClone(original);
clone.detalhes.nivel = "Arquiteto";

console.log(original.detalhes.nivel); // "Senior" (intacto!)
console.log(clone.detalhes.nivel);    // "Arquiteto"`,
    runExample: () => {
      const original = {
        projeto: "JS Interactive Hub",
        config: { versao: 1, criadoEm: new Date().getFullYear() }
      };
      const copia = structuredClone(original);
      copia.config.versao = 2; // Altera apenas na cópia profunda!
      return {
        type: 'Deep Clone (Nativo)',
        result: {
          originalVersao: original.config.versao,
          cloneVersao: copia.config.versao,
          referenciaIgual: original.config === copia.config // false
        },
        explanation: 'structuredClone garante que objetos aninhados não compartilhem o mesmo endereço de memória.'
      };
    }
  },

  {
    id: 'obj-spread',
    name: 'Spread Operator (...) em Objetos',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const mesclado = { ...obj1, ...obj2, novaProp: "valor" };',
    description: 'Permite descarregar (espalhar) todas as propriedades enumeráveis de um objeto dentro de um novo objeto literal, facilitando clonagem rasa (Shallow Copy) e mesclagem com sobrescrita de valores.',
    codeSnippet: `const configPadrao = { tema: "light", audio: true, volume: 80 };
const preferenciaUsuario = { tema: "dark", volume: 100 };

// Mescla com prevalência das propriedades do segundo objeto
const configFinal = { ...configPadrao, ...preferenciaUsuario, versao: "2.0" };
console.log(configFinal);`,
    runExample: () => {
      const padrao = { tema: "light", audio: true, volume: 80 };
      const custom = { tema: "dark", volume: 100 };
      const resultado = { ...padrao, ...custom, versao: "2.0" };
      return {
        type: 'Object Mesclado',
        result: resultado,
        explanation: 'Propriedades do objeto customizado sobrescreveram o padrão sem mutar o original.'
      };
    }
  },

  {
    id: 'obj-optional-chaining',
    name: 'Optional Chaining (?.) & Nullish Coalescing (??)',
    category: 'objects',
    categoryLabel: 'Objetos & JSON',
    badgeClass: 'bg-warning text-dark',
    syntax: 'const valor = obj?.subPropriedade?.campo ?? "Valor Padrão";',
    description: 'O Optional Chaining (?.) evita o clássico erro "TypeError: Cannot read properties of undefined". Já o Nullish Coalescing (??) aplica um fallback apenas se o valor for null ou undefined (não descartando zero ou string vazia).',
    codeSnippet: `const usuarioApi = {
  id: 42,
  nome: "Marina"
  // perfil ou contato não existem na resposta
};

// Navegação segura sem quebrar o código
const cep = usuarioApi.endereco?.cep ?? "CEP não cadastrado";
const curtidas = usuarioApi.estatisticas?.curtidas ?? 0;

console.log(cep);      // "CEP não cadastrado"
console.log(curtidas); // 0`,
    runExample: () => {
      const usuario = { id: 42, nome: "Marina", config: { score: 0 } };
      const rua = usuario.endereco?.rua ?? "Rua não informada";
      // Operador || descartaria o 0 por ser falsy; o ?? preserva o 0 perfeitamente!
      const score = usuario.config?.score ?? 10;
      return {
        type: 'Safe Navigation',
        result: { rua, scorePreservado: score },
        explanation: 'Navegação segura evita que o interpretador pare por referências inexistentes.'
      };
    }
  },

  // --------------------------------------------------------------------------
  // GRUPO 4: ARMAZENAMENTO E ASSINCRONISMO (7 MÉTODOS)
  // --------------------------------------------------------------------------
  {
    id: 'storage-local',
    name: 'localStorage.setItem() / getItem()',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'localStorage.setItem("chave", "valor"); const val = localStorage.getItem("chave");',
    description: 'Mecanismo da Web Storage API que persiste pares chave-valor em texto puro no navegador do usuário. Os dados não possuem prazo de expiração e persistem mesmo após reiniciar o browser.',
    codeSnippet: `// 1. Grava no navegador
localStorage.setItem("usuario_ativo", "Dev Web Senior");

// 2. Recupera quando necessário
const user = localStorage.getItem("usuario_ativo");
console.log("Recuperado:", user);`,
    runExample: () => {
      const chave = 'demo_interactive_hub_test';
      const valor = `Gravado às ${new Date().toLocaleTimeString('pt-BR')}`;
      localStorage.setItem(chave, valor);
      const lido = localStorage.getItem(chave);
      return {
        type: 'Web Storage API',
        result: {
          chaveArmazenada: chave,
          dadoGravadoELido: lido,
          status: 'Armazenado com sucesso no LocalStorage do navegador'
        },
        explanation: 'Operação de escrita e leitura síncrona no LocalStorage validada!'
      };
    }
  },

  {
    id: 'storage-session',
    name: 'sessionStorage.setItem() / getItem()',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'sessionStorage.setItem("token", "xyz"); const t = sessionStorage.getItem("token");',
    description: 'Similar ao localStorage, porém com ciclo de vida limitado à sessão da aba atual do navegador. Se o usuário fechar a aba ou janela, os dados são automaticamente destruídos pelo navegador.',
    codeSnippet: `// Armazena credencial temporária da aba atual
sessionStorage.setItem("sessao_id", "auth-session-98765");

const tokenAtual = sessionStorage.getItem("sessao_id");
console.log("Sessão válida apenas nesta aba:", tokenAtual);`,
    runExample: () => {
      const chave = 'sessao_temp_demo';
      sessionStorage.setItem(chave, `Token_${Math.floor(Math.random() * 10000)}`);
      const val = sessionStorage.getItem(chave);
      return {
        type: 'Session Storage API',
        result: { chave, tokenSessao: val, expiraAoFecharAba: true },
        explanation: 'Ideal para dados sensíveis ou estados temporários de fluxos em etapas.'
      };
    }
  },

  {
    id: 'async-fetch',
    name: 'fetch() API',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'fetch(url).then(res => res.json()).then(data => ...);',
    description: 'API moderna e nativa para realizar requisições HTTP assíncronas (AJAX) baseada em Promises. Substituiu definitivamente o antigo objeto XMLHttpRequest e dispensou bibliotecas externas pesadas.',
    codeSnippet: `// Consumindo um endpoint público de teste
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => {
    if (!response.ok) throw new Error("Falha na resposta HTTP");
    return response.json();
  })
  .then(data => console.log("Dados recebidos:", data))
  .catch(err => console.error("Erro na requisição:", err));`,
    runExample: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return {
          type: 'Promise / HTTP Response',
          result: data,
          explanation: `Requisição GET HTTP 200 realizada com sucesso via fetch() nativo!`
        };
      } catch (err) {
        return {
          type: 'Fetch Fallback',
          result: { aviso: 'Modo offline ou sem conexão externa', detalhe: err.message },
          explanation: 'Demonstração de tratamento com bloco try/catch.'
        };
      }
    }
  },

  {
    id: 'async-promise-await',
    name: 'Promise / async & await',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'async function carregar() { const resultado = await promessa; }',
    description: 'Açúcar sintático (Syntactic Sugar) sobre Promises que permite escrever código assíncrono com a legibilidade de um fluxo sequencial síncrono, facilitando o uso de blocos try...catch para tratamento de exceções.',
    codeSnippet: `// Função assíncrona simulando atraso de rede
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function executarProcessamento() {
  console.log("Iniciando processo...");
  await esperar(1000); // Aguarda 1 segundo sem travar a thread
  console.log("Processo concluído!");
  return { status: "Sucesso", code: 200 };
}`,
    runExample: async () => {
      const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      const inicio = performance.now();
      await esperar(300);
      const duracao = Math.round(performance.now() - inicio);
      return {
        type: 'Async / Await Resolution',
        result: {
          mensagem: 'Promise resolvida com sucesso!',
          tempoDecorrido: `${duracao} ms`,
          threadBloqueada: false
        },
        explanation: 'Fluxo assíncrono pausado com "await" sem congelar a interface visual do navegador.'
      };
    }
  },

  {
    id: 'async-promise-all',
    name: 'Promise.all()',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'const [res1, res2] = await Promise.all([promessa1, promessa2]);',
    description: 'Executa múltiplas Promises em paralelo e aguarda a conclusão de TODAS. É muito mais rápido do que executar await de forma sequencial quando uma requisição não depende do resultado da outra.',
    codeSnippet: `const buscarUsuario = Promise.resolve({ id: 1, nome: "Carla" });
const buscarConfiguracoes = Promise.resolve({ tema: "dark" });

// Dispara ambas simultaneamente
const [usuario, config] = await Promise.all([
  buscarUsuario,
  buscarConfiguracoes
]);

console.log(usuario, config);`,
    runExample: async () => {
      const p1 = new Promise(res => setTimeout(() => res('Módulo Usuários Carregado'), 150));
      const p2 = new Promise(res => setTimeout(() => res('Módulo Notificações Carregado'), 200));
      const inicio = performance.now();
      const resultados = await Promise.all([p1, p2]);
      const duracao = Math.round(performance.now() - inicio);
      return {
        type: 'Parallel Promises',
        result: { resultados, duracaoTotal: `${duracao} ms` },
        explanation: 'Ambas as Promises foram executadas em paralelo simultaneamente!'
      };
    }
  },

  {
    id: 'async-promise-settled',
    name: 'Promise.allSettled()',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'const resultados = await Promise.allSettled([p1, p2, p3]);',
    description: 'Aguarde até que todas as Promises tenham sido concluídas (seja com sucesso ou com falha). Diferente de Promise.all, não interrompe a execução caso uma das requisições seja rejeitada!',
    codeSnippet: `const promessas = [
  Promise.resolve("Serviço A: OK"),
  Promise.reject(new Error("Serviço B: Indisponível")),
  Promise.resolve("Serviço C: OK")
];

const relatorio = await Promise.allSettled(promessas);
// Retorna array de objetos com status: "fulfilled" ou "rejected"
console.log(relatorio);`,
    runExample: async () => {
      const promessas = [
        Promise.resolve({ servico: 'Autenticação', ok: true }),
        Promise.reject('Falha de timeout em Pagamentos'),
        Promise.resolve({ servico: 'Catalogo', ok: true })
      ];
      const relatorio = await Promise.allSettled(promessas);
      return {
        type: 'Settled Array',
        result: relatorio.map(r => ({ status: r.status, detalhe: r.value || r.reason })),
        explanation: 'Ideal para coletar respostas de microsserviços onde uma falha não deve derrubar o sistema.'
      };
    }
  },

  {
    id: 'async-timers',
    name: 'setTimeout() & setInterval()',
    category: 'async',
    categoryLabel: 'Storage & Async',
    badgeClass: 'bg-info text-dark',
    syntax: 'const timer = setTimeout(callback, ms); clearTimeout(timer);',
    description: 'Métodos do Host/Window que enfileiram callbacks na Macrotask Queue do Event Loop após o tempo decorrido. Fundamentais para temporizadores, contagens regressivas e polling.',
    codeSnippet: `// Dispara callback após 2 segundos
const timerId = setTimeout(() => {
  console.log("Executado após 2 segundos!");
}, 2000);

// Para cancelar antes de rodar:
// clearTimeout(timerId);`,
    runExample: async () => {
      return new Promise((resolve) => {
        const inicio = performance.now();
        setTimeout(() => {
          const delta = Math.round(performance.now() - inicio);
          resolve({
            type: 'Timer Concluído (Macrotask)',
            result: { mensagem: 'Callback de setTimeout executado!', atrasoMedido: `${delta} ms` },
            explanation: 'O Event Loop enviou a tarefa para a fila e a executou quando a thread principal liberou.'
          });
        }, 350);
      });
    }
  },

  // --------------------------------------------------------------------------
  // GRUPO 5: STRINGS E UTILITÁRIOS (5 MÉTODOS)
  // --------------------------------------------------------------------------
  {
    id: 'str-trim',
    name: 'String.prototype.trim()',
    category: 'strings',
    categoryLabel: 'Strings & Utilitários',
    badgeClass: 'bg-danger',
    syntax: 'const textoLimpo = textoComEspacos.trim();',
    description: 'Remove todos os espaços em branco do início e do final de uma string (incluindo quebras de linha e tabulações), sem modificar os espaços intermediários entre as palavras.',
    codeSnippet: `const inputUsuario = "   exemplo@email.com   \\n";
const emailHigienizado = inputUsuario.trim();

console.log(\`Tamanho original: \${inputUsuario.length}\`); // 25
console.log(\`Tamanho limpo: \${emailHigienizado.length}\`);     // 17`,
    runExample: () => {
      const entrada = "   contato@faculdade.edu.br   \n";
      const limpo = entrada.trim();
      return {
        type: 'String Sanitizada',
        result: {
          original: `"${entrada}" (tamanho: ${entrada.length})`,
          higienizado: `"${limpo}" (tamanho: ${limpo.length})`
        },
        explanation: 'Espaços inúteis removidos nas extremidades da string.'
      };
    }
  },

  {
    id: 'str-split',
    name: 'String.prototype.split()',
    category: 'strings',
    categoryLabel: 'Strings & Utilitários',
    badgeClass: 'bg-danger',
    syntax: 'const arrayDePartes = texto.split(separador);',
    description: 'Divide um texto em um array de substrings com base em um separador (string delimitadora ou expressão regular). Indispensável para processamento de CSVs, tags e tokens.',
    codeSnippet: `const tecnologiasCsv = "HTML5, CSS3, JavaScript, Bootstrap, jQuery";

// Divide a string a cada vírgula seguida de espaço
const listaTechs = tecnologiasCsv.split(", ");
console.log(listaTechs);
// ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"]`,
    runExample: () => {
      const csv = "HTML5, CSS3, JavaScript, Bootstrap, jQuery";
      const array = csv.split(", ");
      return {
        type: 'Array de Strings',
        result: array,
        explanation: `String convertida em array de ${array.length} elementos independentes.`
      };
    }
  },

  {
    id: 'str-replace',
    name: 'String.prototype.replace() / replaceAll()',
    category: 'strings',
    categoryLabel: 'Strings & Utilitários',
    badgeClass: 'bg-danger',
    syntax: 'const novoTexto = texto.replace(padrao, substituto);',
    description: 'Substitui a primeira (com replace) ou todas as ocorrências (com replaceAll ou regex global /g) de um padrão dentro da string, retornando uma nova string.',
    codeSnippet: `const template = "Olá, {{nome}}! Seu curso de {{curso}} começou.";

// Substituição encadeada
const mensagem = template
  .replace("{{nome}}", "Ayslan")
  .replace("{{curso}}", "Interfaces Web");

console.log(mensagem);`,
    runExample: () => {
      const original = "Preço: R$ 100,00 - Desconto: R$ 20,00";
      const modificado = original.replaceAll("R$", "US$");
      return {
        type: 'String Modificada',
        result: {
          antes: original,
          depois: modificado
        },
        explanation: 'Substituição global de termos realizada com replaceAll().'
      };
    }
  },

  {
    id: 'str-template-literals',
    name: 'Template Literals (Template Strings)',
    category: 'strings',
    categoryLabel: 'Strings & Utilitários',
    badgeClass: 'bg-danger',
    syntax: 'const texto = `Olá ${nome}, total: R$ ${preco * qtd}`;',
    description: 'Recurso introduzido no ES6 delimitado por crases (` `) que viabiliza interpolação direta de expressões com ${...}, quebras de linha automáticas e montagem legível de templates HTML sem o operador "+".',
    codeSnippet: `const usuario = "Ayslan";
const semestres = 3;

// Interpolação elegante e multilinhas
const apresentacao = \`
  Estudante: \${usuario.toUpperCase()}
  Período: \${semestres}º Trimestre
  Status: \${semestres >= 3 ? "Concluindo ciclo" : "Iniciante"}
\`.trim();

console.log(apresentacao);`,
    runExample: () => {
      const usuario = "Ayslan";
      const semestres = 3;
      const card = `Estudante: ${usuario.toUpperCase()} | Período: ${semestres}º Tri | Status: ${semestres >= 3 ? "Avançado" : "Iniciante"}`;
      return {
        type: 'String Interpolada (ES6+)',
        result: card,
        explanation: 'Expressões lógicas e variáveis interpoladas dinamicamente dentro de crases.'
      };
    }
  },

  {
    id: 'str-pad',
    name: 'String.prototype.padStart() / padEnd()',
    category: 'strings',
    categoryLabel: 'Strings & Utilitários',
    badgeClass: 'bg-danger',
    syntax: 'str.padStart(tamanhoAlvo, caractereDePreenchimento);',
    description: 'Preenche o início ou o final da string com um caractere até atingir o comprimento desejado. Excelente para números com zeros à esquerda, máscaras de cartão de crédito e alinhamento de texto.',
    codeSnippet: `// 1. Formata número de pedido com zeros à esquerda
const pedidoId = "42".padStart(6, "0"); // "000042"

// 2. Máscara de cartão de crédito
const ultimos4 = "1234".padStart(16, "*");
console.log(ultimos4); // "************1234"`,
    runExample: () => {
      const id = "89".padStart(5, "0");
      const cartao = "5678".padStart(16, "•");
      const dataHora = String(new Date().getHours()).padStart(2, "0");
      return {
        type: 'Strings Formatadas com Pad',
        result: {
          codigoComZeros: id,
          mascaraCartao: cartao,
          horaComDoisDigitos: dataHora
        },
        explanation: 'padStart() e padEnd() padronizam tamanhos sem necessidade de funções complexas.'
      };
    }
  },

  // --------------------------------------------------------------------------
  // GRUPO 6: MODERNO & AVANÇADO (3 MÉTODOS / RECURSOS)
  // --------------------------------------------------------------------------
  {
    id: 'adv-intl-number-format',
    name: 'Intl.NumberFormat (Moeda & Localização)',
    category: 'advanced',
    categoryLabel: 'Moderno & Avançado',
    badgeClass: 'bg-purple text-white',
    syntax: 'new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);',
    description: 'API nativa do ECMAScript Internationalization que formata números, percentuais e moedas respeitando com rigor matemático os símbolos, separadores de milhar e casas decimais de qualquer país do mundo.',
    codeSnippet: `const valor = 125430.75;

// Formatação brasileira (Real R$)
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

// Formatação americana (Dólar USD)
const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(valor);

console.log(brl); // "R$ 125.430,75"
console.log(usd); // "$125,430.75"`,
    runExample: () => {
      const valor = 125430.75;
      const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
      const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valor);
      const eur = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valor);
      return {
        type: 'Intl Formatted Currencies',
        result: { 'Brasil (BRL)': brl, 'Estados Unidos (USD)': usd, 'Alemanha (EUR)': eur },
        explanation: 'Precisão de internacionalização nativa sem precisar de bibliotecas de formatação externas!'
      };
    }
  },

  {
    id: 'adv-destructuring',
    name: 'Destructuring Assignment (Desestruturação)',
    category: 'advanced',
    categoryLabel: 'Moderno & Avançado',
    badgeClass: 'bg-purple text-white',
    syntax: 'const { nome, idade = 18 } = usuario; const [primeiro, ...resto] = lista;',
    description: 'Sintaxe expressiva introduzida no ES6 que permite descompactar valores de arrays ou propriedades de objetos diretamente em variáveis distintas, suportando renomeação e valores padrão.',
    codeSnippet: `const configuracao = {
  servidor: "api.faculdade.edu",
  porta: 8080
  // ssl não foi definido
};

// Desestrutura com valor padrão e renomeação
const { servidor: host, porta, ssl = true } = configuracao;

console.log(host);  // "api.faculdade.edu"
console.log(porta); // 8080
console.log(ssl);   // true (valor fallback)`,
    runExample: () => {
      const config = { servidor: "api.faculdade.edu", porta: 8080 };
      const { servidor: host, porta, ssl = true } = config;
      const cores = ["azul", "verde", "amarelo"];
      const [cor1, ...outras] = cores;
      return {
        type: 'Destructured Variables',
        result: { hostRenomeado: host, porta, sslPadrao: ssl, primeiraCor: cor1, outrasCores: outras },
        explanation: 'Desestruturação limpa e direta para extrair propriedades de objetos e arrays.'
      };
    }
  },

  {
    id: 'adv-rest-spread-functions',
    name: 'Rest Parameters & Spread em Funções',
    category: 'advanced',
    categoryLabel: 'Moderno & Avançado',
    badgeClass: 'bg-purple text-white',
    syntax: 'function somar(...numeros) { return numeros.reduce(...); }',
    description: 'Permite que uma função represente um número indefinido de argumentos como um array real. Supera de forma tipada e segura o arcaico objeto "arguments", integrando-se perfeitamente com Arrow Functions.',
    codeSnippet: `// Função com número variável de parâmetros (Rest)
function calcularMedia(disciplina, ...notas) {
  const soma = notas.reduce((acc, n) => acc + n, 0);
  const media = soma / notas.length;
  return { disciplina, media: Number(media.toFixed(1)) };
}

const resultado = calcularMedia("Interfaces Web", 8.5, 9.0, 7.5, 10.0);
console.log(resultado);`,
    runExample: () => {
      function calcularMedia(disciplina, ...notas) {
        const soma = notas.reduce((acc, n) => acc + n, 0);
        return { disciplina, notas, media: Number((soma / notas.length).toFixed(2)) };
      }
      const res = calcularMedia("Interfaces Web", 8.5, 9.0, 7.5, 10.0);
      return {
        type: 'Rest Parameters Evaluation',
        result: res,
        explanation: 'Argumentos variáveis condensados em um array legítimo via operador rest (...).'
      };
    }
  }

];


/* ============================================================================
 * 2. SELEÇÃO DE ELEMENTOS DO DOM (DOM CACHE)
 * ============================================================================
 */
const searchInput = document.getElementById('searchInput');
const btnClearSearch = document.getElementById('btnClearSearch');
const searchFeedbackBadge = document.getElementById('searchFeedbackBadge');
const functionsGrid = document.getElementById('functionsGrid');
const emptyCatalogState = document.getElementById('emptyCatalogState');
const btnResetFilters = document.getElementById('btnResetFilters');
const headerCountTotal = document.getElementById('headerCountTotal');
const headerCountCategories = document.getElementById('headerCountCategories');

// Pílulas e contadores
const categoryPills = document.querySelectorAll('.category-pill');
const pillCountAll = document.getElementById('pillCountAll');
const pillCountArrays = document.getElementById('pillCountArrays');
const pillCountDom = document.getElementById('pillCountDom');
const pillCountObjects = document.getElementById('pillCountObjects');
const pillCountAsync = document.getElementById('pillCountAsync');
const pillCountStrings = document.getElementById('pillCountStrings');
const pillCountAdvanced = document.getElementById('pillCountAdvanced');


/* ============================================================================
 * 3. GERENCIAMENTO DE ESTADO LOCAL DA INTERFACE
 * ============================================================================
 */
let activeCategory = 'all';
let searchTerm = '';


/* ============================================================================
 * 4. FUNÇÕES DE UTILIDADE E FORMATAÇÃO
 * ============================================================================
 */

/**
 * Sanitiza texto para evitar injeção de código XSS em saídas HTML.
 */
const escapeHTML = (str) => {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Converte qualquer valor JavaScript em uma exibição colorida com tokens
 * de console semelhantes a um terminal de desenvolvimento.
 */
const formatConsoleOutput = (value) => {
  if (value === null) {
    return '<span class="token-null">null</span>';
  }
  if (value === undefined) {
    return '<span class="token-null">undefined</span>';
  }
  if (typeof value === 'boolean') {
    return `<span class="token-boolean">${value}</span>`;
  }
  if (typeof value === 'number') {
    return `<span class="token-number">${value}</span>`;
  }
  if (typeof value === 'string') {
    return `<span class="token-string">"${escapeHTML(value)}"</span>`;
  }
  if (Array.isArray(value) || typeof value === 'object') {
    try {
      const json = JSON.stringify(value, null, 2);
      return `<span class="token-object">${escapeHTML(json)}</span>`;
    } catch {
      return String(value);
    }
  }
  return escapeHTML(String(value));
};


/* ============================================================================
 * 5. CÁLCULO DE CONTADORES E FILTRAGEM
 * ============================================================================
 */

/**
 * Atualiza os contadores numéricos das abas/pílulas de categoria.
 */
const updateCategoryCounters = () => {
  const total = jsCatalog.length;
  const countArrays = jsCatalog.filter(item => item.category === 'arrays').length;
  const countDom = jsCatalog.filter(item => item.category === 'dom').length;
  const countObjects = jsCatalog.filter(item => item.category === 'objects').length;
  const countAsync = jsCatalog.filter(item => item.category === 'async').length;
  const countStrings = jsCatalog.filter(item => item.category === 'strings').length;
  const countAdvanced = jsCatalog.filter(item => item.category === 'advanced').length;

  if (pillCountAll) pillCountAll.textContent = total;
  if (pillCountArrays) pillCountArrays.textContent = countArrays;
  if (pillCountDom) pillCountDom.textContent = countDom;
  if (pillCountObjects) pillCountObjects.textContent = countObjects;
  if (pillCountAsync) pillCountAsync.textContent = countAsync;
  if (pillCountStrings) pillCountStrings.textContent = countStrings;
  if (pillCountAdvanced) pillCountAdvanced.textContent = countAdvanced;

  if (headerCountTotal) headerCountTotal.textContent = `${total} funções`;
  if (headerCountCategories) headerCountCategories.textContent = '6 módulos';
};

/**
 * Retorna os itens do catálogo filtrados pela categoria selecionada
 * e pelo termo de busca digitado pelo usuário.
 */
const getFilteredCatalog = () => {
  return jsCatalog.filter(item => {
    // 1. Filtro por Categoria
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    // 2. Filtro por Termo de Busca (Case-insensitive)
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = term === '' ||
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.categoryLabel.toLowerCase().includes(term) ||
      item.syntax.toLowerCase().includes(term);

    return matchesCategory && matchesSearch;
  });
};


/* ============================================================================
 * 6. RENDERIZAÇÃO DINÂMICA DOS CARDS DA APLICAÇÃO
 * ============================================================================
 */

/**
 * Renderiza todos os cards de funções na grade do DOM.
 */
const renderCatalog = () => {
  const filteredItems = getFilteredCatalog();

  // Limpa o container da grade
  functionsGrid.innerHTML = '';

  // Tratamento de Empty State
  if (filteredItems.length === 0) {
    emptyCatalogState.classList.remove('d-none');
    searchFeedbackBadge.textContent = 'Nenhum resultado para a consulta atual';
    searchFeedbackBadge.className = 'badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2 rounded-pill fw-semibold';
    return;
  }

  emptyCatalogState.classList.add('d-none');
  searchFeedbackBadge.textContent = `Exibindo ${filteredItems.length} de ${jsCatalog.length} método(s)`;
  searchFeedbackBadge.className = 'badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold';

  // Renderiza cada card usando template literals
  filteredItems.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-12 col-lg-6 col-xxl-4';

    col.innerHTML = `
      <div class="card function-card cat-${item.category} shadow-sm" data-id="${item.id}">
        
        <!-- Cabeçalho do Card -->
        <div class="card-header bg-white border-0 pt-3 pb-2 px-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="badge ${item.badgeClass} rounded-pill small" ${item.category === 'advanced' ? 'style="background-color: #8b5cf6;"' : ''}>
              ${escapeHTML(item.categoryLabel)}
            </span>
            <code class="small text-muted font-monospace" style="font-size: 0.75rem;">ES6+</code>
          </div>
          <h2 class="h6 fw-bold mb-1 text-dark text-break">
            ${escapeHTML(item.name)}
          </h2>
          <p class="text-secondary small mb-2" style="font-size: 0.82rem; min-height: 40px;">
            ${escapeHTML(item.description)}
          </p>
          
          <!-- Box de Sintaxe Rápida -->
          <div class="bg-light p-2 rounded-2 border small font-monospace text-dark text-break mb-2" style="font-size: 0.75rem;">
            <span class="text-primary fw-bold">Sintaxe:</span> <code>${escapeHTML(item.syntax)}</code>
          </div>
        </div>

        <!-- Corpo do Card: Mini Editor de Código -->
        <div class="card-body px-3 py-2">
          <div class="code-editor-box mb-3">
            <div class="editor-header">
              <div class="editor-dots">
                <span class="editor-dot dot-red"></span>
                <span class="editor-dot dot-yellow"></span>
                <span class="editor-dot dot-green"></span>
              </div>
              <span class="editor-lang">JavaScript</span>
              <button 
                type="button" 
                class="btn btn-copy-code border-0" 
                data-action="copy" 
                title="Copiar código para a área de transferência"
                aria-label="Copiar código"
              >
                <i class="bi bi-clipboard"></i> Copiar
              </button>
            </div>
            <div class="editor-body">
              <pre><code>${escapeHTML(item.codeSnippet)}</code></pre>
            </div>
          </div>

          <!-- Live Playground: Console de Saída -->
          <div class="console-container">
            <div class="console-header">
              <span class="d-flex align-items-center gap-1">
                <i class="bi bi-terminal text-info"></i> Retorno do Console
              </span>
              <span class="badge bg-dark border border-secondary text-secondary" id="typeBadge-${item.id}">
                Aguardando execução
              </span>
            </div>
            
            <div class="console-output is-empty" id="output-${item.id}">
              Clique no botão "Executar Exemplo" para visualizar o retorno em tempo real.
            </div>
          </div>
        </div>

        <!-- Rodapé do Card: Ações -->
        <div class="card-footer bg-light bg-opacity-50 border-top p-3 d-flex justify-content-between align-items-center mt-auto">
          <small class="text-muted" style="font-size: 0.72rem;">
            <i class="bi bi-shield-check text-success me-1"></i> Execução Segura
          </small>
          <button 
            type="button" 
            class="btn btn-primary btn-sm rounded-pill px-3 fw-semibold shadow-sm d-flex align-items-center gap-2"
            data-action="run"
            data-id="${item.id}"
          >
            <i class="bi bi-play-fill fs-6"></i> Executar Exemplo
          </button>
        </div>

      </div>
    `;

    functionsGrid.appendChild(col);
  });
};


/* ============================================================================
 * 7. EXECUÇÃO NO LIVE PLAYGROUND & EVENT DELEGATION
 * ============================================================================
 */

/**
 * Dispara a execução demonstrativa de um método no console do card.
 */
const runMethodExample = async (itemId, buttonElement) => {
  const methodObj = jsCatalog.find(item => item.id === itemId);
  if (!methodObj) return;

  const outputContainer = document.getElementById(`output-${itemId}`);
  const typeBadge = document.getElementById(`typeBadge-${itemId}`);

  if (!outputContainer) return;

  // Feedback visual de carregamento no botão
  const originalBtnHTML = buttonElement.innerHTML;
  buttonElement.disabled = true;
  buttonElement.innerHTML = `<span class="spinner-border spinner-border-sm" role="status"></span> Executando...`;

  try {
    const startTime = performance.now();
    // Executa a função do objeto (suporta funções síncronas e assíncronas com await)
    const resultPayload = await methodObj.runExample();
    const elapsedTime = Math.round(performance.now() - startTime);

    // Remove estado vazio
    outputContainer.classList.remove('is-empty');

    // Atualiza o tipo e badge de tempo
    if (typeBadge) {
      typeBadge.className = 'badge bg-success bg-opacity-25 text-success border border-success border-opacity-50';
      typeBadge.textContent = `${resultPayload.type} (${elapsedTime}ms)`;
    }

    // Formata o retorno de forma visual
    const formattedHTML = formatConsoleOutput(resultPayload.result);
    const explanationHTML = resultPayload.explanation ? 
      `<div class="mt-2 pt-2 border-top border-secondary border-opacity-25 small text-light text-opacity-75"><i class="bi bi-info-circle text-info me-1"></i> ${escapeHTML(resultPayload.explanation)}</div>` : '';

    outputContainer.innerHTML = formattedHTML + explanationHTML;

  } catch (error) {
    outputContainer.classList.remove('is-empty');
    if (typeBadge) {
      typeBadge.className = 'badge bg-danger text-white';
      typeBadge.textContent = 'Erro de Execução';
    }
    outputContainer.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-triangle-fill me-1"></i> ${escapeHTML(error.message)}</span>`;
  } finally {
    // Restaura o botão
    buttonElement.disabled = false;
    buttonElement.innerHTML = originalBtnHTML;
  }
};

/**
 * Copia o snippet de código para a área de transferência do usuário.
 */
const copyCodeSnippet = (itemId, buttonElement) => {
  const methodObj = jsCatalog.find(item => item.id === itemId);
  if (!methodObj) return;

  navigator.clipboard.writeText(methodObj.codeSnippet)
    .then(() => {
      const originalHTML = buttonElement.innerHTML;
      buttonElement.innerHTML = `<i class="bi bi-check2 text-success"></i> Copiado!`;
      setTimeout(() => {
        buttonElement.innerHTML = originalHTML;
      }, 2000);
    })
    .catch(err => {
      console.error('Falha ao copiar código:', err);
    });
};

/**
 * Ouvinte delegado no container da grade de funções.
 */
functionsGrid.addEventListener('click', (event) => {
  const target = event.target;

  // 1. Clique em "Executar Exemplo"
  const runBtn = target.closest('[data-action="run"]');
  if (runBtn) {
    const itemId = runBtn.dataset.id;
    runMethodExample(itemId, runBtn);
    return;
  }

  // 2. Clique em "Copiar Código"
  const copyBtn = target.closest('[data-action="copy"]');
  if (copyBtn) {
    const card = copyBtn.closest('.function-card');
    if (card) {
      copyCodeSnippet(card.dataset.id, copyBtn);
    }
  }
});


/* ============================================================================
 * 8. CONFIGURAÇÃO DE FILTROS & BUSCA
 * ============================================================================
 */
const setupFiltersAndSearch = () => {
  // Pílulas de Categoria
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      renderCatalog();
    });
  });

  // Campo de Busca em Tempo Real
  searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value;
    renderCatalog();
  });

  // Botão de Limpar Busca
  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    renderCatalog();
    searchInput.focus();
  });

  // Botão de Restaurar Filtros no Estado Vazio
  btnResetFilters.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    activeCategory = 'all';
    categoryPills.forEach(p => p.classList.remove('active'));
    document.querySelector('.category-pill[data-category="all"]')?.classList.add('active');
    renderCatalog();
  });
};


/* ============================================================================
 * 9. SEÇÃO DIDÁTICA: LABORATÓRIO COMPARATIVO VANILLA JS vs JQUERY
 * ============================================================================
 */
const setupJqueryComparativeLab = () => {
  const labConsoleMsg = document.getElementById('labGlobalConsoleMsg');

  const updateLabConsole = (msg, isJquery = false) => {
    if (!labConsoleMsg) return;
    const prefix = isJquery ? '[jQuery Executado]' : '[Vanilla JS Executado]';
    labConsoleMsg.innerHTML = `<span class="${isJquery ? 'text-warning' : 'text-info'}">${prefix}</span>: ${msg}`;
  };

  // CASO 1: Seleção e Texto (Vanilla JS vs jQuery)
  const btnCompare1 = document.getElementById('btnRunCompare1');
  const demoTextEl = document.getElementById('demoTextElement');
  btnCompare1?.addEventListener('click', () => {
    const novoTexto = `Atualizado via Vanilla JS (${new Date().toLocaleTimeString()})`;
    demoTextEl.textContent = novoTexto;
    demoTextEl.className = 'fw-bold text-primary';
    updateLabConsole(`document.querySelector('#demoTextElement').textContent = '${novoTexto}'`);
  });

  // CASO 2: Escuta de Eventos
  const btnCompare2 = document.getElementById('btnRunCompare2');
  const demoClickFeedback = document.getElementById('demoClickFeedback');
  btnCompare2?.addEventListener('click', (event) => {
    event.preventDefault();
    demoClickFeedback.textContent = `Clique interceptado às ${new Date().toLocaleTimeString()}!`;
    demoClickFeedback.className = 'fw-bold text-success';
    updateLabConsole(`addEventListener('click', e => { e.preventDefault(); }) interceptou o clique com sucesso.`);
  });

  // CASO 3: Assincronismo HTTP (fetch vs $.ajax)
  const btnCompare3 = document.getElementById('btnRunCompare3');
  const demoAsyncStatus = document.getElementById('demoAsyncStatus');
  btnCompare3?.addEventListener('click', async () => {
    demoAsyncStatus.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Consumindo fetch()...`;
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      demoAsyncStatus.textContent = `Sucesso: Post #${data.id} recebido!`;
      demoAsyncStatus.className = 'fw-bold text-info text-truncate d-block';
      updateLabConsole(`const data = await (await fetch(url)).json(); -> Dados obtidos sem jQuery.`);
    } catch {
      demoAsyncStatus.textContent = `Concluído via Simulação Local!`;
      demoAsyncStatus.className = 'fw-bold text-info';
      updateLabConsole(`fetch() com async/await executado em modo de contingência.`);
    }
  });

  // CASO 4: Animações (CSS Transitions vs jQuery fadeToggle)
  const btnCompare4 = document.getElementById('btnRunCompare4');
  btnCompare4?.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.$) {
      $('#demoAnimationTarget').fadeToggle(350, function () {
        const visivel = $(this).is(':visible');
        updateLabConsole(`$('#demoAnimationTarget').fadeToggle(350) -> Elemento agora está ${visivel ? 'visível' : 'oculto'}.`, true);
      });
    } else {
      const target = document.getElementById('demoAnimationTarget');
      target.classList.toggle('fade-hidden');
      updateLabConsole(`target.classList.toggle('fade-hidden') executado via Vanilla JS.`);
    }
  });
};


/* ============================================================================
 * 10. INICIALIZAÇÃO GERAL DA APLICAÇÃO
 * ============================================================================
 */
const init = () => {
  updateCategoryCounters();
  renderCatalog();
  setupFiltersAndSearch();
  setupJqueryComparativeLab();

  console.log(
    '%c⚡ JS Interactive Hub expandido com sucesso! %c40 métodos catalogados (ES6 a ES2023).',
    'color: #8b5cf6; font-weight: bold; font-size: 13px;',
    'color: #10b981; font-weight: bold;'
  );
};

// Dispara a inicialização quando o script é avaliado
init();
