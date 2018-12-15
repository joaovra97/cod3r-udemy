let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);
--num1; // é priorizado antes de qualquer comparação, exemplo abaixo
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);
