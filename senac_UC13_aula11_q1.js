/**
 * Função que gerencia uma lista de tarefas.
 * Adiciona 3 tarefas, remove a última tarefa adicionada e exibe o array final.
 */
function gerenciarTarefas() {
    // Criando um array vazio chamado 'tarefas'
    let tarefas = [];
    
    // Adicionando três tarefas ao array 'tarefas'
    tarefas.push("Estudar JavaScript");
    tarefas.push("Fazer exercícios");
    tarefas.push("Revisar código");

    // Removendo a última tarefa adicionada
    tarefas.pop();

    // Exibindo o array final no console
    console.log(tarefas);
}

// Chamando a função gerenciarTarefas para executar o script
gerenciarTarefas();
