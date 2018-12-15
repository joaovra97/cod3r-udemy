/*function criarPessoa(nome) {
  falar = () => console.log(`Meu nome é ${nome}`);

  return {
    nome,
    falar
  };
} -- Minha versão (factory)*/

function Pessoa(nome) {
  this.nome = nome;

  this.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p1 = Pessoa("João");
p1.falar();
