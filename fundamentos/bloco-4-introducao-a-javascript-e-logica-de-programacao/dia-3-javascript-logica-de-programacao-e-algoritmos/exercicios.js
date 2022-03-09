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

//Ex 3

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

