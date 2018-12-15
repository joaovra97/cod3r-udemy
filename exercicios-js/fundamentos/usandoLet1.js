// Fossui escopo de bloco por chaves

var numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);
