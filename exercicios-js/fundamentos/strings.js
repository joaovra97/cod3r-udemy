const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //retorna valor vazio
console.log(escola.charCodeAt(3)); //retorn o valor da tabela unicode
console.log(escola.indexOf("3"));

console.log(escola.substring(1)); //vai da posição 1 pra frente
console.log(escola.substring(0, 3)); //vai da posição 0 pra a 2

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e")); // /\d/g = substitui todos os dígitos | /\w/g = substitui todas as letras e digitos

console.log("Ana,Maria,Pedro".split(","));
