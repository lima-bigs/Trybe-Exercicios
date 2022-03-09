/*Ex 1

let number = 4;
let fatorial = 1;

for (let i = number; i >= 1; i -= 1 ){
    fatorial = fatorial * i;
    console.log(fatorial);
}
*/

/*Ex 2

let word = 'banana';
let palavraInvert = '';

for (let i = word.length - 1; i >=0; i -=1){
    palavraInvert = palavraInvert + word[i];
}
console.log(palavraInvert);
*/

/*Ex 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i of array){
    if (i.length > maiorPalavra.length){
        maiorPalavra = i
    }
}
console.log('A maior palavra é: ' + maiorPalavra);

for (let i of array){
    if (i.length < menorPalavra.length){
        menorPalavra = i
    }
}
console.log('A menor palavra é: ' + menorPalavra);
*/

//Ex 4

let ultimoNumero = 50;
let numeroDaVez = 0;
let maiorPrimo = 0;
let numeroMenor = 0
let count = 0;
let i = 0;
let z = 0;

for (let i = 2; i <= ultimoNumero ; i += 1){
    numeroDaVez = i;
    for (z = 2; z < numeroDaVez; z += 1){
        numeroMenor = z;
        if (numeroDaVez % numeroMenor == 0){
            count += 1;
        }
    }
    if (count == 0){
        maiorPrimo = numeroDaVez;
    }
    count = 0;  
}
console.log(maiorPrimo);


