/**
 * Função que calcula a média das notas de três alunos e exibe o nome de cada um com sua respectiva média.
 *
 * @returns {void}
 */
function calcularMediaAlunos() {
    // Criando o array 'alunos', onde cada elemento é um array com as notas de um aluno
    const alunos = [
        { nome: "João", notas: [8, 7, 9] },
        { nome: "Maria", notas: [6, 8, 7] },
        { nome: "Carlos", notas: [7, 7, 8] }
    ];

    // Loop para percorrer o array 'alunos'
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        let somaNotas = 0;

        // Loop aninhado para percorrer as notas de cada aluno e somá-las
        for (let j = 0; j < aluno.notas.length; j++) {
            somaNotas += aluno.notas[j];
        }

        // Calculando a média das notas do aluno
        const media = somaNotas / aluno.notas.length;

        // Exibindo o nome do aluno e sua média
        console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
    }
}

// Chamando a função para calcular e exibir as médias
calcularMediaAlunos();
