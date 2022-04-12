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
      id: 9,
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
  
  // Ex 1

//   const arrayLivros = (livros) => livros.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);

//   console.log(arrayLivros(books));

    // const novaLista = books.map((livro) => ({idade: (livro.releaseYear - livro.author.birthYear), autor: livro.author.name})).sort();

// console.log(novaLista);

// Ex 3

// const ficcaoFantasia = books.filter((livro)=> livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica');

// console.log(ficcaoFantasia);

//Ex 4

// const maisAntigos = books.filter((livro)=> {
//     return livro.releaseYear < 2022 - 60
// }).sort((livro1,livro2)=>livro1.releaseYear-livro2.releaseYear);

// Ex 5

// const ficcaoFantasia = books.filter((livro)=> livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica');
// const listaAutores = ficcaoFantasia.map((autor)=> autor.author.name);
// console.log(listaAutores.sort());

// Ex 6

// const ficcaoFantasia = books.filter((livro)=> livro.releaseYear < 2022 - 60);
// const listaAntigos = ficcaoFantasia.map((titulo)=> titulo.name);
// console.log(listaAntigos);

// Ex 7

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const autor3Iniciais = books.filter((book) => book.author.name[1] === "." && book.author.name[4] === "." && book.author.name[7] === ".");
  return autor3Iniciais[0].name;
  }
  console.log(authorWith3DotsOnName(books)); 
