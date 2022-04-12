// Ex 1

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((novoArray, elemento) => novoArray.concat(elemento));
  }

  console.log(flatten(arrays));