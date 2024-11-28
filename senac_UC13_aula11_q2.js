/**
 * Função que gerencia um estoque.
 * Inicializa um array com 4 itens, atualiza o segundo item e exibe a quantidade total de itens no estoque.
 */
function gerenciarEstoque() {
    // Criando o array 'estoque' com 4 itens iniciais
    let estoque = ["Maçã", "Banana", "Laranja", "Uva"];
    
    // Atualizando o segundo item no array (índice 1)
    estoque[1] = "Pera";  // A "Banana" será substituída por "Pera"
    
    // Exibindo o número total de itens no estoque
    console.log("Número total de itens no estoque:", estoque.length);
}

// Chamando a função para executar o script
gerenciarEstoque();
