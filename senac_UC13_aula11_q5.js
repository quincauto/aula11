/**
 * Função que implementa um jogo de adivinhação de números entre 1 e 10.
 * O usuário deve adivinhar o número correto, e o jogo continua até que o acerte
 * ou digite "sair" para encerrar.
 *
 * @returns {void} - A função não retorna nada, mas interage com o usuário no console.
 */
function jogoAdivinhacao() {
    // Número aleatório entre 1 e 10
    const numeroCorreto = Math.floor(Math.random() * 10) + 1;

    // Variável para armazenar a tentativa do usuário
    let tentativa = null;

    // Loop que continua pedindo números até que o usuário acerte ou digite "sair"
    while (tentativa !== numeroCorreto) {
        // Pedir ao usuário para digitar um número ou "sair"
        tentativa = prompt("Adivinhe um número entre 1 e 10 (ou digite 'sair' para encerrar):");

        // Verificar se o usuário quer sair
        if (tentativa.toLowerCase() === "sair") {
            console.log("Você escolheu sair. O jogo terminou.");
            break;
        }

        // Verificar se a tentativa é válida (número)
        tentativa = Number(tentativa);

        if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
            console.log("Por favor, digite um número válido entre 1 e 10.");
        } else if (tentativa === numeroCorreto) {
            console.log("Parabéns! Você acertou o número.");
        } else {
            console.log("Errado! Tente novamente.");
        }
    }
}

// Chamar a função para iniciar o jogo
jogoAdivinhacao();
