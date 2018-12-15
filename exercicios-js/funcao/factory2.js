function criarProduto(nome, preco) {
  //não precisa especificar nome do atributo se chave e atributo tiverem o mesmo nome
  return {
    nome,
    preco,
    desconto: 0.1
  };
}

console.log(criarProduto("Notebook", 2199.49));
console.log(criarProduto("iPad", 1199.49));
