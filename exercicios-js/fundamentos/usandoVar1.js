// Só possui dois escopos: de função e global. FUJA DE VARIÁVEIS GLOBAIS

{
  {
    {
      {
        var sera = "Será???";
        console.log(sera);
      }
    }
  }
}
console.log(sera);

function teste() {
  var local = 123;
  console.log(local);
}

teste();
console.log(local);
