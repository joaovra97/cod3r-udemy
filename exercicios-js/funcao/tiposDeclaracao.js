console.log(soma(3, 4));

// function declaration (disponibiliza a função já na primeira linha de código, antes de ser declarada)
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function(x, y) {
  return x - y;
};
console.log(sub(3, 4));

// named function expression (facilita para debuggar por mostra o nome da função que possui o erro)
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 4));
