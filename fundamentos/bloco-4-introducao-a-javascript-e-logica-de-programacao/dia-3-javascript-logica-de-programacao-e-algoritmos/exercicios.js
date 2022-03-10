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

/*Ex 4

let ultimoNumero = 50;
let maiorPrimo = 0;
let count = 0;

for (i = 2; i <= ultimoNumero ; i += 1){
    for (z = 2; z < i; z += 1){
        if (i % z == 0){
            count += 1;
        }
    }
    if (count == 0){
        maiorPrimo = i;
    }
    count = 0;  
}
console.log(maiorPrimo);
*/
const n = 15;
const numeroDeLinhas = (n + 1) / 2;
let asteriscos = '*';
let espaços = '';
let aux = numeroDeLinhas - 1;

for (let i = 1; i <= n; i += 2) {
    for (let z = aux; z > 0; z -= 1) {
        espaços += ' ';
    }
    console.log(espaços + asteriscos);
    asteriscos += '**';
    espaços = '';
    aux -= 1;
}