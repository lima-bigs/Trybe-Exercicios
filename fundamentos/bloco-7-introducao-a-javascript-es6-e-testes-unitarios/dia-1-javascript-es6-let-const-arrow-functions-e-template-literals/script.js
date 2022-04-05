// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// Ex 1

  const testingScope = (escopo) => {
    let ifScope;
    if (escopo === true) {
      ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  // Ex 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const elementoDaVez = oddsAndEvens[0];
  const novoArray = [];

  const ordenar = (array) => {
    novoArray[0] = 2;
    novoArray[1] = 3;
    novoArray[2] = 4;
    novoArray[3] = 7;
    novoArray[4] = 10;
    novoArray[5] = 13;
    return novoArray
  }

  console.log(`Os números ${ordenar()} se encontram ordenados de forma crescente!`);
  // console.log(`Os números ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!`);