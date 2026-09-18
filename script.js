/**
 * ============================================================================
 * GUIA DIDÁTICO & NÚCLEO DA APLICAÇÃO: JAVASCRIPT MODERNO (ES6+) & JQUERY
 * ============================================================================
 * Disciplina: Projeto de Interfaces para Web
 * Autor: Engenheiro Front-end Sênior & Professor de Programação Web
 * 
 * OBJETIVO PEDAGÓGICO:
 * Este código foi concebido para servir como um livro de cabeceira interativo.
 * Cada bloco lógico demonstra não apenas "como fazer", mas explica o "porquê
 * da decisão técnica", cobrindo escopo, manipulação de estado, eventos da DOM,
 * métodos de alta ordem (High-Order Functions) e comparação com jQuery.
 * ============================================================================
 */

/* ============================================================================
 * 1. VARIÁVEIS E ESCOPO (const, let vs var)
 * ============================================================================
 * CONCEITO TEÓRICO:
 * No JavaScript tradicional (pré-ES6 / 2015), existia apenas 'var', que possuía
 * escopo de FUNÇÃO (function scope) e sofria "Hoisting" (elevação) sem inicialização,
 * além de permitir redeclarações acidentais e poluir o objeto global 'window'.
 * 
 * POR QUE EVITAMOS 'var' HOJE EM DIA?
 * 1. Ausência de escopo de bloco: Uma variável com 'var' dentro de um 'if' ou 'for'
 *    vaza para fora do bloco, causando efeitos colaterais (bugs difíceis de rastrear).
 * 2. Hoisting imprevisível: 'var' é içada como 'undefined', permitindo que seja
 *    acessada antes de sua declaração no código.
 * 3. Redeclaração permissiva: Pode-se declarar 'var x = 10;' e logo abaixo 'var x = 20;'
 *    sem que o interpretador aponte qualquer erro.
 * 
 * AS BOAS PRÁTICAS MODERNAS EXIGEM:
 * - 'const': Usada por padrão quando a referência não deve ser reatribuída. 
 *   Atenção: em Arrays e Objetos declarados com 'const', o endereço de memória é fixo,
 *   mas as propriedades ou elementos internos PODEM ser modificados (mutabilidade).
 * - 'let': Usada estritamente quando o valor da variável precisará ser reatribuído 
 *   ao longo do ciclo de vida (ex.: contadores, flags de estado). Possui escopo de bloco.
 */

// Chave utilizada para persistência local no navegador
const STORAGE_KEY = 'interfaces_web_tasks_v1';

// Estado global de filtro ativo ('all' | 'pending' | 'completed')
// Declarado com 'let' pois o usuário mudará esse valor dinamicamente ao clicar nos botões de filtro.
let currentFilter = 'all';

// Termo de busca digitado pelo usuário (reatribuível a cada digitação)
let searchTerm = '';


/* ============================================================================
 * 2. ESTRUTURA DE DADOS: O ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
 * ============================================================================
 * CONCEITO TEÓRICO:
 * O padrão moderno de desenvolvimento UI preconiza que "A Interface é um reflexo
 * direto do Estado da Aplicação" (UI = f(State)).
 * 
 * Em vez de usarmos a própria DOM como repositório de dados (armazenando valores em 
 * atributos HTML de tags), mantemos uma "Fonte Única da Verdade" (Single Source of Truth)
 * em memória: um Array de Objetos JavaScript.
 * 
 * Sempre que o dado muda (adicionar, concluir, remover), nós:
 * 1. Alteramos o Array de Objetos em memória.
 * 2. Persistimos no LocalStorage.
 * 3. Re-renderizamos a DOM com base no novo estado.
 * 
 * ESTRUTURA DE CADA OBJETO 'Task':
 * {
 *   id: string (Identificador único baseado em timestamp e número pseudo-aleatório)
 *   title: string (Descrição da meta)
 *   priority: 'baixa' | 'media' | 'alta'
 *   category: 'Estudos' | 'Trabalho' | 'Saúde' | 'Pessoal'
 *   completed: boolean (Status de conclusão)
 *   createdAt: string (Data formatada em formato legível pt-BR)
 * }
 */

// Array de Objetos que conterá todas as tarefas
let tasks = [];


/* ============================================================================
 * 3. SELEÇÃO DA DOM (DOCUMENT OBJECT MODEL)
 * ============================================================================
 * CONCEITO TEÓRICO:
 * A DOM é a representação em árvore de objetos do documento HTML gerada pelo navegador.
 * Para manipular qualquer elemento visualmente via JavaScript, precisamos obter
 * sua referência em memória.
 * 
 * PRINCIPAIS MÉTODOS DE SELEÇÃO:
 * - document.getElementById('id'): Método mais performático do navegador. Busca diretamente
 *   na tabela de símbolos interna de IDs. Retorna 1 HTMLElement ou null.
 * - document.querySelector('seletorCSS'): Extremamente versátil. Aceita qualquer seletor CSS
 *   válido (#id, .classe, tag[atributo]). Retorna o PRIMEIRO elemento correspondente ou null.
 * - document.querySelectorAll('seletorCSS'): Retorna uma NodeList (estática) com todos os
 *   elementos encontrados. Diferente de uma HTMLCollection, a NodeList já implementa o método
 *   '.forEach()', permitindo iteração direta.
 */

// Seleção de elementos do Formulário (Usando getElementById para máxima clareza e performance)
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskPrioritySelect = document.getElementById('taskPriority');
const taskCategorySelect = document.getElementById('taskCategory');
const btnResetForm = document.getElementById('btnResetForm');

// Seleção de elementos da Listagem e Pesquisa
const taskListContainer = document.getElementById('taskList');
const emptyStateElement = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const btnClearSearch = document.getElementById('btnClearSearch');
const listFooterInfo = document.getElementById('listFooterInfo');
const btnClearAllCompleted = document.getElementById('btnClearAllCompleted');

// Seleção de elementos de Estatísticas e Dashboard
const countTotalElement = document.getElementById('countTotal');
const countPendingElement = document.getElementById('countPending');
const countCompletedElement = document.getElementById('countCompleted');
const progressPercentageElement = document.getElementById('progressPercentage');
const progressBarElement = document.getElementById('progressBar');

// Seleção de grupos de botões com querySelectorAll (Retorna uma NodeList estática)
const filterButtons = document.querySelectorAll('.filter-btn');

// Elementos da Seção Didática do Laboratório jQuery
const btnTestJqueryCase1 = document.getElementById('btnTestJqueryCase1');
const btnTestJqueryCase2 = document.getElementById('btnTestJqueryCase2');
const btnTestJqueryFade = document.getElementById('btnTestJqueryFade');
const labFeedbackAlert = document.getElementById('labFeedbackAlert');
const labFeedbackText = document.getElementById('labFeedbackText');


/* ============================================================================
 * 4. FUNÇÕES DE PERSISTÊNCIA (LOCALSTORAGE & JSON)
 * ============================================================================
 * CONCEITO TEÓRICO:
 * O LocalStorage permite persistir dados como pares chave-valor no navegador do cliente,
 * sobrevivendo a recarregamentos de página (F5) e ao fechamento da aba.
 * 
 * LIMITAÇÃO:
 * O LocalStorage aceita APENAS strings primitivas. Para contornar isso:
 * - JSON.stringify(objeto): Serializa nosso Array de Objetos para uma String JSON.
 * - JSON.parse(string): Deserializa a String JSON de volta para uma estrutura nativa de Array/Objetos.
 */

/**
 * Salva o estado atual do array de tarefas no LocalStorage.
 * Uso de Arrow Function com 'const' para garantir que a função não seja sobrescrita.
 */
const saveTasksToStorage = () => {
  try {
    const serializedData = JSON.stringify(tasks);
    localStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.error('Falha ao salvar dados no LocalStorage:', error);
  }
};

/**
 * Carrega as tarefas do LocalStorage ou insere dados didáticos iniciais caso seja o primeiro acesso.
 */
const loadTasksFromStorage = () => {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
      // JSON.parse converte a string gravada de volta para Array de Objetos
      tasks = JSON.parse(rawData);
    } else {
      // Dados iniciais pré-carregados para demonstração pedagógica imediata
      tasks = [
        {
          id: 'demo-task-1',
          title: 'Compreender escopo léxico e diferenças entre const, let e var',
          priority: 'alta',
          category: 'Estudos',
          completed: true,
          createdAt: new Date(Date.now() - 3600000).toLocaleDateString('pt-BR')
        },
        {
          id: 'demo-task-2',
          title: 'Implementar validação visual com Bootstrap e manipulação de eventos',
          priority: 'media',
          category: 'Estudos',
          completed: false,
          createdAt: new Date().toLocaleDateString('pt-BR')
        },
        {
          id: 'demo-task-3',
          title: 'Comparar sintaxe Vanilla JS vs jQuery na seção de laboratório',
          priority: 'baixa',
          category: 'Projetos',
          completed: false,
          createdAt: new Date().toLocaleDateString('pt-BR')
        }
      ];
      saveTasksToStorage();
    }
  } catch (error) {
    console.error('Falha ao carregar dados do LocalStorage, inicializando array vazio:', error);
    tasks = [];
  }
};


/* ============================================================================
 * 5. MÉTODOS DE ITERAÇÃO E CÁLCULO DE MÉTRICAS (MÉTODOS FUNCIONAIS DE ARRAY)
 * ============================================================================
 * CONCEITO TEÓRICO:
 * Em vez de usar laços imperativos clássicos como 'for (let i = 0; i < n; i++)',
 * o JavaScript moderno incentiva a Programação Funcional com métodos declarativos:
 * 
 * - .filter(callback): Cria um novo array contendo apenas os itens que retornam 'true'.
 * - .reduce(callback, initialValue): Reduz uma coleção inteira a um único valor acumulado.
 * - .forEach(callback): Itera sobre cada item sem retornar nada (ideal para efeitos colaterais).
 */

/**
 * Atualiza os contadores no Dashboard e calcula a barra de progresso.
 */
const updateMetrics = () => {
  // 1. Total de tarefas cadastradas (tamanho total do array)
  const total = tasks.length;

  // 2. Tarefas Concluídas: usando .filter() para obter itens com completed === true
  const completedTasks = tasks.filter((task) => task.completed === true);
  const completedCount = completedTasks.length;

  // 3. Tarefas Pendentes: calculadas por subtração ou filtrando !task.completed
  const pendingCount = total - completedCount;

  // 4. Percentual de Conclusão: cálculo aritmético com proteção contra divisão por zero
  const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // Atualização dos nós de texto no DOM através da propriedade textContent
  // 'textContent' é mais seguro e rápido que 'innerHTML' pois não força o parser HTML
  countTotalElement.textContent = total;
  countPendingElement.textContent = pendingCount;
  countCompletedElement.textContent = completedCount;
  progressPercentageElement.textContent = `${percentage}%`;

  // Atualização dinâmica dos atributos e largura do Bootstrap Progress Bar
  progressBarElement.style.width = `${percentage}%`;
  progressBarElement.setAttribute('aria-valuenow', percentage);

  // Exibe ou oculta o botão de "Limpar Concluídas" no rodapé da lista
  if (completedCount > 0) {
    btnClearAllCompleted.classList.remove('d-none');
  } else {
    btnClearAllCompleted.classList.add('d-none');
  }
};


/* ============================================================================
 * 6. MANIPULAÇÃO DA DOM E RENDERIZAÇÃO DA LISTA
 * ============================================================================
 * CONCEITO TEÓRICO:
 * A função de renderização lê o estado filtrado de 'tasks' e gera os elementos
 * visuais correspondentes.
 * 
 * Recursos utilizados:
 * - Template Literals (crases ` `): Permitem interpolação direta com ${expressao} e
 *   quebra de linha sem necessidade de concatenações confusas com o operador '+'.
 * - Sanitização simples contra XSS (Cross-Site Scripting) ao exibir textos digitados pelo usuário.
 * - Classes dinâmicas do Bootstrap com base no estado (ex: badges, bordas e tachados).
 */

/**
 * Função utilitária para evitar injeção de tags HTML maliciosas (XSS).
 * Converte caracteres especiais em entidades HTML seguras.
 */
const escapeHTML = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

/**
 * Retorna as tarefas filtradas com base no status selecionado (currentFilter)
 * e no termo de pesquisa (searchTerm).
 */
const getFilteredTasks = () => {
  return tasks.filter((task) => {
    // 1. Filtragem por Status (Todas, Pendentes, Concluídas)
    let matchesStatus = true;
    if (currentFilter === 'pending') {
      matchesStatus = !task.completed;
    } else if (currentFilter === 'completed') {
      matchesStatus = task.completed;
    }

    // 2. Filtragem por Termo de Busca (Case-insensitive)
    const cleanSearch = searchTerm.trim().toLowerCase();
    const matchesSearch = cleanSearch === '' || 
      task.title.toLowerCase().includes(cleanSearch) || 
      task.category.toLowerCase().includes(cleanSearch);

    return matchesStatus && matchesSearch;
  });
};

/**
 * Renderiza todos os cards de tarefas na lista da DOM.
 */
const renderTasks = () => {
  const visibleTasks = getFilteredTasks();

  // Limpa o conteúdo atual da UL
  taskListContainer.innerHTML = '';

  // Gerenciamento do Empty State (quando não há itens a exibir)
  if (visibleTasks.length === 0) {
    emptyStateElement.classList.remove('d-none');
  } else {
    emptyStateElement.classList.add('d-none');
  }

  // Iteração da lista filtrada usando .forEach()
  visibleTasks.forEach((task) => {
    // Mapeamento de cor e ícone para prioridades
    let priorityBadgeClass = 'bg-success';
    let priorityLabel = 'Baixa';

    if (task.priority === 'alta') {
      priorityBadgeClass = 'bg-danger';
      priorityLabel = 'Alta';
    } else if (task.priority === 'media') {
      priorityBadgeClass = 'bg-warning text-dark';
      priorityLabel = 'Média';
    }

    // Criação do elemento <li> via document.createElement (Abordagem orientada a nós)
    const li = document.createElement('li');

    // Manipulação de classes da DOM:
    // .classList.add() adiciona classes individualmente de forma controlada
    li.classList.add('list-group-item', 'task-item', `priority-${task.priority}`);
    
    // Se a tarefa estiver concluída, adicionamos a classe especial de estilização
    if (task.completed) {
      li.classList.add('task-completed');
    }

    // Atributo de dado personalizado (HTML5 data-* attribute) para identificação rápida
    li.dataset.id = task.id;

    // Montagem do HTML interno utilizando Template Literals (ES6)
    li.innerHTML = `
      <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
        
        <!-- Bloco de Status e Título -->
        <div class="d-flex align-items-center gap-3 flex-grow-1" style="min-width: 200px;">
          <!-- Botão de Concluir/Reabrir -->
          <button 
            type="button" 
            class="btn btn-toggle-status ${task.completed ? 'btn-success text-white' : 'btn-outline-secondary'}" 
            data-action="toggle" 
            title="${task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}"
            aria-label="Alterar status da tarefa"
          >
            <i class="bi ${task.completed ? 'bi-check-lg' : 'bi-circle'}"></i>
          </button>

          <!-- Título da Tarefa e Metadados -->
          <div>
            <span class="task-title fw-semibold d-block text-break">
              ${escapeHTML(task.title)}
            </span>
            <div class="d-flex align-items-center gap-2 mt-1">
              <span class="badge ${priorityBadgeClass} rounded-pill small">
                Prioridade: ${priorityLabel}
              </span>
              <span class="badge bg-light text-secondary border rounded-pill small">
                <i class="bi bi-tag me-1"></i>${escapeHTML(task.category)}
              </span>
              <span class="text-muted" style="font-size: 0.75rem;">
                <i class="bi bi-calendar3 me-1"></i>${task.createdAt}
              </span>
            </div>
          </div>
        </div>

        <!-- Bloco de Ações (Exclusão) -->
        <div class="d-flex align-items-center gap-1">
          <button 
            type="button" 
            class="btn btn-outline-danger btn-sm rounded-pill px-2 py-1 btn-delete-task" 
            data-action="delete" 
            title="Excluir tarefa permanentemente"
            aria-label="Excluir tarefa"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </div>

      </div>
    `;

    // Inserção do nó <li> no container da lista pai usando appendChild
    taskListContainer.appendChild(li);
  });

  // Atualiza a mensagem do rodapé informando a quantidade visível
  listFooterInfo.textContent = `Exibindo ${visibleTasks.length} de ${tasks.length} tarefa(s)`;

  // Atualiza métricas gerais (Dashboard)
  updateMetrics();
};


/* ============================================================================
 * 7. MANIPULAÇÃO DE EVENTOS: FORMULÁRIO E EVENT DELEGATION
 * ============================================================================
 * CONCEITO TEÓRICO:
 * A escuta de eventos em JavaScript é feita com 'addEventListener(tipo, callback)'.
 * Isso desacopla o comportamento (JS) da apresentação (HTML), superando os antigos
 * atributos 'onclick' embutidos nas tags.
 * 
 * O PAPEL DE 'event.preventDefault()':
 * Por padrão, o evento 'submit' de um formulário HTML tenta enviar uma requisição HTTP
 * (GET ou POST) para o destino definido em 'action' e recarrega a página inteira.
 * Em Single Page Applications (SPAs) e sistemas reativos modernos, chamamos
 * 'event.preventDefault()' para suprimir esse comportamento padrão e permitir que o
 * JavaScript processe os dados em memória sem recarregamento.
 * 
 * PADRÃO EVENT DELEGATION:
 * Em vez de adicionar um ouvinte de clique em cada botão de cada tarefa (o que consumiria
 * memória excessiva e exigiria recriar ouvintes toda vez que a lista fosse renderizada),
 * adicionamos UM ÚNICO ouvinte no elemento pai ('#taskList'). Quando qualquer botão
 * interno é clicado, o evento "sobe" pela árvore do DOM (Event Bubbling) e é interceptado
 * pelo pai com 'event.target.closest()'.
 */

/**
 * Tratador de envio do formulário (Cadastro de nova tarefa).
 */
const handleFormSubmit = (event) => {
  // Interrompe o recarregamento automático da página
  event.preventDefault();

  // Validação nativa do formulário com feedback visual do Bootstrap
  // Adicionamos a classe 'was-validated' ao formulário para acionar as mensagens de erro/sucesso
  taskForm.classList.add('was-validated');

  // Método nativo checkValidity() verifica se todos os campos atendem aos atributos (required, minlength, etc.)
  if (!taskForm.checkValidity()) {
    // Interrompe a execução caso algum campo seja inválido
    return;
  }

  // Captura e higieniza os valores dos campos
  const titleValue = taskTitleInput.value.trim();
  const priorityValue = taskPrioritySelect.value;
  const categoryValue = taskCategorySelect.value;

  // Criação do novo Objeto de Tarefa seguindo o contrato de dados
  const newTask = {
    // Gera identificador único usando timestamp e valor aleatório
    id: `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    title: titleValue,
    priority: priorityValue,
    category: categoryValue,
    completed: false,
    createdAt: new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  // Adiciona a nova tarefa no início da lista (unshift insere no índice 0)
  tasks.unshift(newTask);

  // Persiste no LocalStorage
  saveTasksToStorage();

  // Re-renderiza a lista visual
  renderTasks();

  // Reseta o formulário e remove a classe de validação
  taskForm.reset();
  taskForm.classList.remove('was-validated');

  // Devolve o foco ao primeiro campo para agilizar novos cadastros
  taskTitleInput.focus();
};

/**
 * Tratador de Event Delegation no container da lista de tarefas.
 * Gerencia tanto o clique de 'concluir' quanto o clique de 'excluir'.
 */
const handleTaskListClick = (event) => {
  // Procura pelo botão com o atributo data-action mais próximo do elemento clicado
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;

  // Encontra o item <li> ancestral para identificar o ID da tarefa
  const listItem = actionButton.closest('.task-item');
  if (!listItem) return;

  const taskId = listItem.dataset.id;
  const action = actionButton.dataset.action;

  // Localiza o índice do objeto no array de estado através de .findIndex()
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) return;

  // 1. AÇÃO DE ALTERNAR STATUS (TOGGLE COMPLETED)
  if (action === 'toggle') {
    // Inverte o booleano de conclusão
    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    // Persiste e re-renderiza
    saveTasksToStorage();
    renderTasks();
  }

  // 2. AÇÃO DE EXCLUSÃO (DELETE TASK)
  else if (action === 'delete') {
    // Animação visual de saída antes de remover fisicamente do array
    listItem.classList.add('task-removing');

    // Aguarda o término da animação CSS (300ms) para remover do estado
    setTimeout(() => {
      // Método .filter() cria um novo array sem o item excluído (imutabilidade)
      tasks = tasks.filter((t) => t.id !== taskId);

      // Persiste e atualiza a interface
      saveTasksToStorage();
      renderTasks();
    }, 280);
  }
};

/**
 * Configuração dos botões de filtro (Todas, Pendentes, Concluídas).
 */
const setupFilterButtons = () => {
  // .forEach percorrendo a NodeList de botões de filtro
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões do grupo
      filterButtons.forEach((b) => b.classList.remove('active'));

      // Adiciona 'active' apenas no botão que acabou de ser clicado
      btn.classList.add('active');

      // Atualiza o estado global de filtro lendo o dataset do elemento
      currentFilter = btn.dataset.filter;

      // Re-renderiza a lista de acordo com o novo filtro
      renderTasks();
    });
  });
};

/**
 * Configuração do campo de busca rápida em tempo real.
 */
const setupSearchInput = () => {
  // Evento 'input' dispara a cada tecla digitada ou colada
  searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value;
    renderTasks();
  });

  // Botão para limpar a busca
  btnClearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    renderTasks();
    searchInput.focus();
  });
};

/**
 * Ação global: Limpar todas as tarefas concluídas.
 */
const setupClearAllCompleted = () => {
  btnClearAllCompleted.addEventListener('click', () => {
    // Confirmação didática simples
    const confirmRemoval = confirm('Deseja realmente remover todas as tarefas concluídas?');
    if (!confirmRemoval) return;

    // .filter mantém apenas as tarefas que NÃO estão concluídas
    tasks = tasks.filter((task) => !task.completed);
    saveTasksToStorage();
    renderTasks();
  });
};

/**
 * Botão de reset do formulário: limpa também as classes de validação do Bootstrap.
 */
const setupFormReset = () => {
  btnResetForm.addEventListener('click', () => {
    taskForm.classList.remove('was-validated');
  });
};


/* ============================================================================
 * 8. INICIALIZAÇÃO DA APLICAÇÃO
 * ============================================================================
 * CONCEITO TEÓRICO:
 * É boa prática orquestrar o ponto de partida do script através de uma função
 * inicializadora (ex: 'init'), disparada após o carregamento da página.
 */
const initApp = () => {
  // 1. Carrega o estado inicial do LocalStorage
  loadTasksFromStorage();

  // 2. Registra o ouvinte de envio do formulário
  taskForm.addEventListener('submit', handleFormSubmit);

  // 3. Registra o Event Delegation na lista de tarefas
  taskListContainer.addEventListener('click', handleTaskListClick);

  // 4. Configura filtros, busca e botões auxiliares
  setupFilterButtons();
  setupSearchInput();
  setupClearAllCompleted();
  setupFormReset();

  // 5. Primeira renderização da interface
  renderTasks();

  console.log('%c🚀 Sistema de Tarefas inicializado com sucesso!', 'color: #10b981; font-weight: bold;');
};

// Executa a inicialização logo após a leitura do script
initApp();


/* ============================================================================
 * ============================================================================
 * 9. SEÇÃO EXTRA: EQUIVALÊNCIA COM JQUERY (GUIA DIDÁTICO COMPARATIVO)
 * ============================================================================
 * ============================================================================
 * O jQuery é uma das bibliotecas mais importantes da história da Web. Criado por
 * John Resig em 2006 com o lema "Write Less, Do More", ele solucionou a dolorosa
 * incompatibilidade entre navegadores da época (Internet Explorer vs Netscape/Firefox).
 * 
 * Hoje, o JavaScript moderno incorporou nativamente quase todos os seus pontos fortes.
 * No entanto, entender a relação entre ambos é crucial para trabalhar em bases de código
 * corporativas consolidadas.
 * 
 * A seguir, apresentamos 4 casos práticos reais e a equivalência exata de sintaxe:
 */

/**
 * ----------------------------------------------------------------------------
 * CASO 1: SELEÇÃO DE ELEMENTOS E MANIPULAÇÃO DE CONTEÚDO / TEXTO
 * ----------------------------------------------------------------------------
 * 
 * // [VANILLA JAVASCRIPT (ES6+)]
 * const el = document.getElementById('countTotal');
 * el.textContent = '42';                     // Altera texto puro
 * el.innerHTML = '<span class="badge">42</span>'; // Insere HTML parseado
 * 
 * // [JQUERY EQUIVALENTE]
 * $('#countTotal').text('42');                // Altera texto puro via função .text()
 * $('#countTotal').html('<span class="badge">42</span>'); // Insere HTML parseado
 * 
 * DIFERENÇA-CHAVE:
 * O jQuery encapsula o elemento nativo dentro de um objeto chamado 'jQuery Wrapper'
 * que permite encadeamento de métodos (Method Chaining), como:
 * $('#countTotal').text('42').addClass('highlight');
 */

/**
 * ----------------------------------------------------------------------------
 * CASO 2: ESCUTA DE EVENTOS E PREVENÇÃO DE COMPORTAMENTO PADRÃO
 * ----------------------------------------------------------------------------
 * 
 * // [VANILLA JAVASCRIPT (ES6+)]
 * const form = document.getElementById('taskForm');
 * form.addEventListener('submit', function(event) {
 *   event.preventDefault(); // Impede recarregamento da página
 *   console.log('Formulário interceptado via Vanilla JS!');
 * });
 * 
 * // [JQUERY EQUIVALENTE]
 * $('#taskForm').on('submit', function(event) {
 *   event.preventDefault();
 *   console.log('Formulário interceptado via jQuery!');
 * });
 * // Ou sintaxe abreviada legada:
 * $('#taskForm').submit(function(event) { ... });
 * 
 * DIFERENÇA-CHAVE:
 * O jQuery normaliza o objeto 'event' para garantir que métodos como
 * 'preventDefault()' e propriedades como 'target' funcionem identicamente
 * até nos navegadores mais arcaicos.
 */

/**
 * ----------------------------------------------------------------------------
 * CASO 3: ANIMAÇÕES E TRANSIÇÕES DE OCULTAÇÃO / REMOÇÃO (FADE OUT)
 * ----------------------------------------------------------------------------
 * 
 * // [VANILLA JAVASCRIPT (ES6+)]
 * // Requer manipular estilos CSS ou classes e agendar remoção com setTimeout / transitionend:
 * const box = document.getElementById('demoBox');
 * box.style.transition = 'opacity 0.3s ease';
 * box.style.opacity = '0';
 * setTimeout(() => {
 *   box.remove(); // Remove o nó da DOM
 * }, 300);
 * 
 * // [JQUERY EQUIVALENTE]
 * // Possui métodos de animação embutidos com suporte a função de callback:
 * $('#demoBox').fadeOut(300, function() {
 *   $(this).remove(); // 'this' referencia o próprio elemento após a animação
 * });
 * 
 * DIFERENÇA-CHAVE:
 * Animações eram um dos maiores atrativos do jQuery antes das CSS3 Transitions
 * serem padronizadas. O jQuery gerenciava a interpolação matemática via JavaScript.
 */

/**
 * ----------------------------------------------------------------------------
 * CASO 4: MANIPULAÇÃO DE CLASSES CSS (ADD, REMOVE, TOGGLE)
 * ----------------------------------------------------------------------------
 * 
 * // [VANILLA JAVASCRIPT (ES6+)]
 * const card = document.querySelector('.card');
 * card.classList.add('shadow-lg');
 * card.classList.remove('border-0');
 * card.classList.toggle('task-completed');
 * 
 * // [JQUERY EQUIVALENTE]
 * $('.card').addClass('shadow-lg');
 * $('.card').removeClass('border-0');
 * $('.card').toggleClass('task-completed');
 */


/* ============================================================================
 * INTEGRAÇÃO PRÁTICA INTERATIVA DO LABORATÓRIO JQUERY NO NAVEGADOR
 * ============================================================================
 * Os ouvintes abaixo são conectados aos botões da seção didática do index.html
 * para permitir que você execute e visualize as instruções do jQuery em tempo real!
 */

// Helper para exibir feedback visual na caixa do laboratório
const displayLabFeedback = (message, isJquery = true) => {
  labFeedbackAlert.classList.remove('d-none', 'alert-primary', 'alert-warning');
  labFeedbackAlert.classList.add(isJquery ? 'alert-warning' : 'alert-primary');
  labFeedbackText.innerHTML = `<strong>${isJquery ? '[jQuery Executado]' : '[Vanilla JS Executado]'}:</strong> ${message}`;
};

// Teste Caso 1: Manipulação com jQuery e Vanilla JS
btnTestJqueryCase1.addEventListener('click', () => {
  // Testando com jQuery através do seletor $
  const currentTotal = $('#countTotal').text();
  console.log('[Laboratório jQuery] Lendo texto com $(\'#countTotal\').text():', currentTotal);
  
  // Feedback na interface
  displayLabFeedback(`Leitura realizada com <code>$('#countTotal').text()</code>. Valor atual: "${currentTotal}".`);
});

// Teste Caso 2: Simulação de Evento de Clique com jQuery
btnTestJqueryCase2.addEventListener('click', () => {
  console.log('[Laboratório jQuery] Disparando evento com jQuery .trigger()');
  displayLabFeedback(`Ouvinte acionado! No jQuery utilizamos <code>$(seletor).on('click', handler)</code>.`);
});

// Teste Caso 3: Executando animação jQuery .fadeToggle() na caixa de demonstração
$('#btnTestJqueryFade').on('click', function (e) {
  e.preventDefault();
  
  // Executando método nativo do jQuery .fadeToggle() com velocidade de 350ms
  $('#demoBox').fadeToggle(350, function () {
    const isVisible = $(this).is(':visible');
    console.log('[Laboratório jQuery] Estado da caixa após fadeToggle():', isVisible ? 'Visível' : 'Oculto');
    displayLabFeedback(`Método <code>$('#demoBox').fadeToggle(350)</code> concluído. Elemento agora está: <strong>${isVisible ? 'Visível' : 'Oculto'}</strong>.`);
  });
});
