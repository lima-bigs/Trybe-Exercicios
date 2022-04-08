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

// // Ex 3

//     const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const corrigeProva = (gabarito, respostas, checaRespostas) => {
//     return `Sua nota foi ${checaRespostas(gabarito, respostas)}`
// }

// const checaRespostas = (gabarito, respostas) => {
//     let counter = 0;
//     for (let index = 0; index < gabarito.length; index += 1) {
//         if (respostas[index] !== 'N.A') {
//             if (respostas[index] === gabarito[index]) {
//                 counter += 1;
//             } else {
//                 counter -= 0.5;
//             }
//         }
//     }
//     return counter;
// }

// console.log(corrigeProva(RIGHT_ANSWERS, STUDENT_ANSWERS, checaRespostas));

// Ex Bônus Parte 1 ex1

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const danoDragon = (dragon) => {
    return Math.floor(Math.random()*(dragon.strength - 15 + 1) + 15);
  }

  const danoWarrior = (warrior) => {
    return Math.floor(Math.random()*(warrior.strength * warrior.weaponDmg - warrior.strength + 1) + warrior.strength);
  }

const magoDanoMana = (mage) => {
    const danoTurno = 0;
    const manaTurno = 0;
    if (mage.mana >= 15) {
        danoTurno = Math.floor(Math.random()*(mage.intelligence * 2 - mage.intelligence + 1) + mage.intelligence);
        const manaTurno = 15;
    } else {
        const danoTurno = "Não possui mana suficiente";
        const manaTurno = 0;
    }
}

  console.log(danoDragon(dragon));
  console.log(danoWarrior(warrior));

  const gameActions = {

  };
