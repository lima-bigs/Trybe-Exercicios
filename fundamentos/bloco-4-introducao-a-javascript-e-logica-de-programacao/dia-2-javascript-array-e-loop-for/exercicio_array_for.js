let meuArray = [];

for (let index = 1 ; index <= 25; index +=1){
    meuArray.push(index);
}
for (let index2 of meuArray){
     console.log(meuArray[index2-1]/2);
}
