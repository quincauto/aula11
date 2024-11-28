/**
 * Função que exibe as palavras de um array em ordem reversa.
 *
 * @param {Array<string>} palavras - Array contendo as palavras a serem exibidas em ordem reversa.
 * @returns {void} - A função exibe as palavras no console, mas não retorna nenhum valor.
 */
function exibirPalavrasReverso(palavras) {
    // Loop reverso para percorrer o array 'palavras' de trás para frente
    for (let i = palavras.length - 1; i >= 0; i--) {
        // Exibindo a palavra no console
        console.log(palavras[i]);
    }
}

// Chamando a função com um array de palavras para exibir em ordem reversa
exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);
