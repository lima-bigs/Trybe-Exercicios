/*Ex 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda, '+ info.personagem);
  */

  //Ex 2 e 3

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }

// for (let i in info){
//Ex 3   console.log(i);
// }

  //Ex 4 
  //console.log(info[i]);
 //}

 //Ex 5

 for (let i in info){
     if (i === 'recorrente'){
         console.log("Ambos recorrentes")
     }
     else {
        console.log(info[i] + ' e '+ info2[i]);
     }
 }

