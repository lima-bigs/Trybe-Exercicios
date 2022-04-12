// // Ex 1

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   function flatten() {
//     return arrays.reduce((novoArray, elemento) => novoArray.concat(elemento));
//   }

//   console.log(flatten(arrays));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// // Ex 2

// const reduceNames = books.reduce((acumulador, elemento, index, array)=> {
//     return index < array.length -1 ? acumulador + `${elemento.author.name}, `: acumulador + `${elemento.author.name}.`;
// },'');
// console.log(reduceNames);

// Ex 3

// const mediaIdade = books.reduce((acc, livro, index, array)=>{
//     let idade = (livro.releaseYear - livro.author.birthYear);
//     acc += idade;
//     return acc
// }, 0);

// console.log(mediaIdade/books.length);

// Ex 4

// const maiorNome = books.reduce((acc, livro)=> {
//     return (acc.name.length > livro.name.length) ? acc : livro;
// });

// console.log(maiorNome);

// Ex 5

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    names.reduce((acc, nome)=> {
        let nomesSplitados = nome.split('')
        console.log(nomesSplitados);
        nomesSplitados.reduce((acc, letra)=>{
            console.log(letra);
            if(letra === 'a' || letra === 'A'){
                acc += 1;
                console.log(acc);
            };
            return acc
        },0);
    }, ''); 
    // return acc;
  };
  console.log(containsA());