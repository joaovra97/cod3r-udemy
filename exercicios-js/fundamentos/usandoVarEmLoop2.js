const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

// for (var i = 0; i < 10; i++) {
//   funcs.push(() => console.log(i));          Usando Arrow Function
// }

funcs[2]();
funcs[8]();
