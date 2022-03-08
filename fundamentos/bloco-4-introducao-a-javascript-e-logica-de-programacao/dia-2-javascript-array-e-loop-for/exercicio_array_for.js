let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index of numbers){
    soma = soma + index;
}
mediaAritm = soma / numbers.length;
console.log(mediaAritm);