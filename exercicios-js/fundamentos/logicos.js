function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv30 = !!(trabalho1 ^ trabalho2); // bitwise XOR (ou exclusivo, ou seja true e false/false e true)
  const comprarTv32 = trabalho1 != trabalho2; // operador binário (dois numeros)
  const manterSaudavel = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; // omitir chave cria um objeto com o nome da propriedade com o nome da variavel e seu constante valor
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
