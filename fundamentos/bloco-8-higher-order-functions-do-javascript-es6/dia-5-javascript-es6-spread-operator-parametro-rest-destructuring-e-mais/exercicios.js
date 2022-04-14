// Ex 1

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });

// Ex 2

// const sum = (...param) => param.reduce((acc, cur)=> acc + cur);
// console.log(sum(1,2,3,4,5,6));

// const sum = (param) => param.reduce((acc, cur)=> acc + cur);
// console.log(sum([1,2,3,4,5,6]));

// Ex 3 ??????

// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
// };

// const gunnar = {
//     name: 'Gunnar',
//     age: 30,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
// };

// const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

// Ex 4

// const people = [
//     {
//         name: 'Nicole',
//         bornIn: 1992,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Harry',
//         bornIn: 2008,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Toby',
//         bornIn: 1901,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Frida',
//         bornIn: 1960,
//         nationality: 'Dannish',
//     },
//     {
//         name: 'Fernando',
//         bornIn: 2001,
//         nationality: 'Brazilian',
//     },
// ];

// const selecionaPessoas = (pessoas) => 
//     pessoas.filter(({ bornIn, nationality }) => bornIn > 1900 && bornIn < 2001 && nationality === 'Australian');
// ;
// console.log(selecionaPessoas(people));

  // Ex 5

//   const myList = [1, 2, 3];

// const [c, b, a] = myList;

// console.log([a, b, c]);

// Ex 6

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([nome, marca, ano]) => {
//   return {
//     nome,
//     marca,
//     ano,
//   };
// };

// console.log(toObject(palio));
// console.log(toObject(shelbyCobra));
// console.log(toObject(chiron));

// Ex 7

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({name, length, measurementUnit}) => {
  return `${name} is ${length} ${measurementUnit} long`;
}

// escreva shipLength abaixo

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'