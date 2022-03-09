/*Ex 1

let number = 4;
let fatorial = 1;

for (let i = number; i >= 1; i -= 1 ){
    fatorial = fatorial * i;
    console.log(fatorial);
}
*/

//Ex 2

let word = 'banana';
let palavraInvert = '';

for (let i = word.length - 1; i >=0; i -=1){
    palavraInvert = palavraInvert + word[i];
}
console.log(palavraInvert);