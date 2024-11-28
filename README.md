# Aluno: Alysson Rodrigo  
# aula:11
# Data:27/11/24

## Questão 1: Gerenciamento de Tarefas

### *O que foi pedido*:
- Criar um array vazio chamado `tarefas`.
- Adicionar três tarefas usando o método `.push()`.
- Remover a última tarefa adicionada usando `.pop()`.
- Exibir o array final no console.

### *Como foi resolvido*:
Criamos um array vazio chamado `tarefas`. Adicionamos três tarefas utilizando o método `.push()` e, em seguida, removemos a última tarefa com `.pop()`. Por fim, exibimos o estado final do array no console.

### *Código*:
```javascript
/**
 * Gerencia uma lista de tarefas.
 * 
 * @returns {void}
 */
function gerenciarTarefas() {
    const tarefas = [];
    tarefas.push("Lavar a louça");
    tarefas.push("Estudar JavaScript");
    tarefas.push("Fazer exercícios físicos");

    tarefas.pop(); // Remove a última tarefa

    console.log("Tarefas finais:", tarefas);
}
gerenciarTarefas();
---
### *Questão* 2: Gerenciamento de Estoque
O que foi pedido:
Criar um array estoque com 4 itens iniciais.
Atualizar o segundo item do array.
Exibir o número total de itens no estoque usando .length.
Como foi resolvido:
Foi criado um array estoque com quatro itens iniciais. O segundo item foi atualizado através da atribuição direta e o total de itens foi exibido no console utilizando a propriedade .length.

Código:
/**
 * Gerencia o estoque de itens.
 * 
 * @returns {void}
 */
function gerenciarEstoque() {
    const estoque = ["Papel", "Caneta", "Caderno", "Borracha"];

    estoque[1] = "Lápis"; // Atualiza o segundo item

    console.log("Total de itens no estoque:", estoque.length);
    console.log("Estoque final:", estoque);
}
gerenciarEstoque();
---
### *Questão* 3: Média de Notas de Alunos
O que foi pedido:
Criar um array alunos, onde cada elemento é um array com as notas de um aluno.
Usar um loop aninhado para calcular a média das notas de cada aluno.
Exibir o nome de cada aluno e sua respectiva média.
Como foi resolvido:
Criamos um array aninhado chamado alunos para armazenar as notas de três alunos. Utilizamos loops aninhados para somar as notas de cada aluno e calcular a média. Exibimos a média no console com duas casas decimais.

Código:

/**
 * Calcula e exibe a média de notas dos alunos.
 * 
 * @returns {void}
 */
function calcularMediaAlunos() {
    const alunos = [
        [8, 7, 9], // Notas do aluno 1
        [6, 8, 7], // Notas do aluno 2
        [10, 9, 8] // Notas do aluno 3
    ];

    for (let i = 0; i < alunos.length; i++) {
        let soma = 0;

        for (let j = 0; j < alunos[i].length; j++) {
            soma += alunos[i][j];
        }

        const media = soma / alunos[i].length;
        console.log(`Aluno ${i + 1}: Média = ${media.toFixed(2)}`);
    }
}
calcularMediaAlunos();
---
### *Questão* 4: Exibição de Palavras em Ordem Reversa
O que foi pedido:
Criar um array palavras com pelo menos cinco palavras.
Usar um loop for reverso para exibir cada palavra no console.
Como foi resolvido:
Criamos um array com cinco palavras. Em seguida, utilizamos um loop for para iterar sobre o array em ordem reversa, exibindo cada palavra no console.

Código:
javascript
Copiar código
/**
 * Exibe as palavras de um array em ordem reversa.
 * 
 * @param {string[]} palavras - Lista de palavras.
 * @returns {void}
 */
function exibirPalavrasReverso(palavras) {
    for (let i = palavras.length - 1; i >= 0; i--) {
        console.log(palavras[i]);
    }
}
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
---
### *Questão* 5: Jogo de Adivinhação
O que foi pedido:
Pedir ao usuário para adivinhar um número entre 1 e 10.
Continuar pedindo até que o usuário acerte.
Parar imediatamente se o usuário digitar "sair".
Exibir mensagens para respostas corretas e para o comando "sair".
Como foi resolvido:
Geramos um número aleatório entre 1 e 10 para o usuário adivinhar. Utilizamos um loop while que solicita números até que o usuário acerte ou escolha "sair". Exibimos mensagens apropriadas em cada caso.

Código:
javascript
Copiar código
/**
 * Jogo de adivinhação de um número entre 1 e 10.
 * 
 * @returns {void}
 */
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let tentativa;

    while (true) {
        tentativa = prompt("Adivinhe o número entre 1 e 10 ou digite 'sair' para encerrar:");

        if (tentativa.toLowerCase() === "sair") {
            console.log("Você saiu do jogo.");
            break;
        }

        if (parseInt(tentativa) === numeroSecreto) {
            console.log("Parabéns! Você acertou!");
            break;
        } else {
            console.log("Tente novamente!");
        }
    }
}
jogoAdivinhacao();