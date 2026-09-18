/**
 * ============================================================================
 * JS INTERACTIVE HUB - GUIA DIDÁTICO & LIVE PLAYGROUND (ES6+ & JQUERY)
 * ============================================================================
 * Disciplina: Projeto de Interfaces para Web
 * Autor: Engenheiro Front-end Sênior & Especialista Pedagógico em JavaScript
 * 
 * OBJETIVO:
 * Plataforma interativa para exploração, estudo e execução ao vivo dos principais
 * métodos e recursos da linguagem JavaScript moderna (ES6+), acompanhada de
 * um laboratório prático comparativo com jQuery.
 * ============================================================================
 */

/* ============================================================================
 * 1. BASE DE CONHECIMENTO E CATÁLOGO DE MÉTODOS (STATE-DRIVEN CATALOG)
 * ============================================================================
 * Cada método é representado por um objeto contendo metadados educacionais,
 * código de exemplo para estudo e uma função executável ('runExample')
 * que alimenta o console interativo em tempo real.
 */
const jsCatalog = [

  // --------------------------------------------------------------------------
  // GRUPO 1: MANIPULAÇÃO DE ARRAYS
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

  // --------------------------------------------------------------------------
  // GRUPO 2: MANIPULAÇÃO DE DOM & EVENTOS
  // --------------------------------------------------------------------------
  {
    id: 'dom-query-selector',
    name: 'document.querySelector() / querySelectorAll()',
    category: 'dom',
    categoryLabel: 'DOM & Eventos',
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
    categoryLabel: 'DOM & Eventos',
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
    categoryLabel: 'DOM & Eventos',
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
    categoryLabel: 'DOM & Eventos',
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

  // --------------------------------------------------------------------------
  // GRUPO 3: OBJETOS E JSON
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

  // --------------------------------------------------------------------------
  // GRUPO 4: ARMAZENAMENTO E ASSINCRONISMO
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
        // Exemplo com simulação assíncrona garantida e segura
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
      await esperar(400); // 400ms delay didático
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

  // --------------------------------------------------------------------------
  // GRUPO 5: STRINGS E UTILITÁRIOS
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
  }

];


/* ============================================================================
 * 2. SELEÇÃO DE ELEMENTOS DO DOM (DOM CACHE)
 * ============================================================================
 * Armazenamos as referências dos nós fixos para evitar reconsultas na árvore DOM.
 */
const searchInput = document.getElementById('searchInput');
const btnClearSearch = document.getElementById('btnClearSearch');
const searchFeedbackBadge = document.getElementById('searchFeedbackBadge');
const functionsGrid = document.getElementById('functionsGrid');
const emptyCatalogState = document.getElementById('emptyCatalogState');
const btnResetFilters = document.getElementById('btnResetFilters');
const headerCountTotal = document.getElementById('headerCountTotal');

// Pílulas e contadores
const categoryPills = document.querySelectorAll('.category-pill');
const pillCountAll = document.getElementById('pillCountAll');
const pillCountArrays = document.getElementById('pillCountArrays');
const pillCountDom = document.getElementById('pillCountDom');
const pillCountObjects = document.getElementById('pillCountObjects');
const pillCountAsync = document.getElementById('pillCountAsync');
const pillCountStrings = document.getElementById('pillCountStrings');


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

  pillCountAll.textContent = total;
  pillCountArrays.textContent = countArrays;
  pillCountDom.textContent = countDom;
  pillCountObjects.textContent = countObjects;
  pillCountAsync.textContent = countAsync;
  pillCountStrings.textContent = countStrings;

  headerCountTotal.textContent = `${total} métodos`;
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
            <span class="badge ${item.badgeClass} rounded-pill small">
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
 * CONCEITO PEDAGÓGICO:
 * Em vez de criar ouvintes 'click' individuais para cada um dos mais de 20 botões
 * de execução e cópia, utilizamos o padrão EVENT DELEGATION no container pai
 * '#functionsGrid'. O evento sobe pelo DOM (Event Bubbling) e é capturado de forma
 * performática e desacoplada.
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
 * Casos práticos demonstrando como o JavaScript moderno (ES6+) substituiu
 * nativamente as conveniências históricas do jQuery.
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
    // Vanilla JS nativo:
    const novoTexto = `Atualizado via Vanilla JS (${new Date().toLocaleTimeString()})`;
    demoTextEl.textContent = novoTexto;
    demoTextEl.className = 'fw-bold text-primary';
    updateLabConsole(`document.querySelector('#demoTextElement').textContent = '${novoTexto}'`);
  });

  // CASO 2: Escuta de Eventos (Eventos normalizados)
  const btnCompare2 = document.getElementById('btnRunCompare2');
  const demoClickFeedback = document.getElementById('demoClickFeedback');
  btnCompare2?.addEventListener('click', (event) => {
    event.preventDefault(); // Impede qualquer ação padrão do navegador
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
      // Uso de fetch nativo moderno com async/await
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
  // Utilizando o próprio jQuery ($) via CDN oficial para demonstrar a equivalência real
  const btnCompare4 = document.getElementById('btnRunCompare4');
  btnCompare4?.addEventListener('click', (e) => {
    e.preventDefault();
    // Execução do método jQuery .fadeToggle() com velocidade 350ms e callback
    if (window.$) {
      $('#demoAnimationTarget').fadeToggle(350, function () {
        const visivel = $(this).is(':visible');
        updateLabConsole(`$('#demoAnimationTarget').fadeToggle(350) -> Elemento agora está ${visivel ? 'visível' : 'oculto'}.`, true);
      });
    } else {
      // Fallback Vanilla JS caso CDN esteja inacessível
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
    '%c⚡ JS Interactive Hub inicializado com sucesso! %c22 métodos catalogados.',
    'color: #6366f1; font-weight: bold; font-size: 13px;',
    'color: #10b981; font-weight: bold;'
  );
};

// Dispara a inicialização quando o script é avaliado
init();
