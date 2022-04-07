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

  // const testingScope = (escopo) => {
  //   let ifScope;
  //   if (escopo === true) {
  //     ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
  //     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
  //     console.log(ifScope);
  //   } else {
  //     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  //     console.log(elseScope);
  //   }
  //   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  // }

  // testingScope(true);

  // Ex 2

  // const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  // const elementoDaVez = oddsAndEvens[0];
  // const novoArray = [];

  // const ordenar = (array) => {
  //   novoArray[0] = 2;
  //   novoArray[1] = 3;
  //   novoArray[2] = 4;
  //   novoArray[3] = 7;
  //   novoArray[4] = 10;
  //   novoArray[5] = 13;
  //   return novoArray
  // }

  // console.log(`Os números ${ordenar()} se encontram ordenados de forma crescente!`);

// Ex bônus

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort((a, b) => a - b);
// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte 2
// Ex 1

// const fatorial = (numero) => {
//   let result = 1;
//   for ( let i = 1; i <= numero; i += 1){
//     result *= i;
//   }
//   return result;
// }
// console.log(fatorial(3));

// // Ex 1 bônus

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5));

// Ex 2

const longestWord = (frase) => {
  const array = frase.split(' ');
  let palavra = array[0];
  for (let index of array){
    if (index.length > palavra.length){
      palavra = index;
    }
  }
  return palavra;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))
 // retorna 'aconteceu'

