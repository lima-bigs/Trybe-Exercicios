// Ex 1

// const newEmployees = (nomeEmail) => {
//     const employees = {
//       id1: nomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: nomeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: nomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

//   const nomeEmail = (name) => {
//       return {
//           nome: name,
//           email: `${name.replace(' ', '_').toLowerCase()}@trybe.com`
//       }
//   }

//   console.log(newEmployees(nomeEmail));

// Ex 2

// const resultado = (numeroApostado, checaSorteio) => {
//     let numeroSorteado = (Math.floor(Math.random()*5))+1;
//     return console.log(checaSorteio (numeroApostado, numeroSorteado));
// }

// const checaSorteio = (numeroApostado, numeroSorteado) => {
//     if (numeroApostado === numeroSorteado) {
//         return "Parabéns você ganhou!";
//     } 
//     return "Tente novamente!";
// }

// resultado(2, checaSorteio);

// Ex 3

    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeProva = (gabarito, respostas, checaRespostas) => {
    return `Sua nota foi ${checaRespostas(gabarito, respostas)}`
}

const checaRespostas = (gabarito, respostas) => {
    let counter = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if (respostas[index] !== 'N.A') {
            if (respostas[index] === gabarito[index]) {
                counter += 1;
            } else {
                counter -= 0.5;
            }
        }
    }
    return counter;
}

console.log(corrigeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, checaRespostas));
