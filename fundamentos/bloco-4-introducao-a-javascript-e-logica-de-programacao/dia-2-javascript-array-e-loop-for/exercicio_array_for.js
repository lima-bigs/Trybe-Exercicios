let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index of numbers){
    if (index % 2 !==0){
        soma += 1;
    }
}
if (soma > 0){
    console.log(soma);
}
else {
    console.log('nenhum valor ímpar encontrado');
}