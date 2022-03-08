let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let Numero = 0;

for (index of numbers){
     if (index > Numero){
        Numero = index;
    }    
}
for (index of numbers){
    if (index < Numero){
       Numero = index;
   }    
}
console.log(Numero); 

