// tipos primitivos = atribuição por valor
// tipos como objeto e funções = atribuição por referência

let valor; // não inicializada (undefinied)
console.log(valor);

valor = null; //não tem nenhum valor e nao há endereço que aponte para um local de memória (ausencia de valor)
console.log(valor);
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
