/*Ex 1

let invertedWord = '';

function verificaPalindrome (word = ''){
    for (index = word.length - 1; index >=0; index -= 1){
        invertedWord +=word[index];
    }
    console.log(word,'invertida', invertedWord);
    if (word == invertedWord){
        return true;
    }
    return false;
}
console.log(verificaPalindrome('nossa'));
*/

/*Ex 2

function indexHighestValue (array = []){
    let highestValue = array [0];
    for (let index of array){
        if (index > highestValue){
            highestValue = index;
        }
    }
    return array.indexOf(highestValue);
}

console.log(indexHighestValue([2, 3, 6, 7, 10, 1]));

//*/

/*Ex 3

function indexLowestValue (array = []){
    let lowestValue = array [0];
    for (let index of array){
        if (index < lowestValue){
            lowestValue = index;
        }
    }
    return array.indexOf(lowestValue);
}

console.log(indexLowestValue([2, 4, 6, 7, 10, 0, -3]));

//*/

/*Ex 4

function bigestName (array = ['']){
    let name = array [0];
    for (let index of array){
        if (index.length > name.length){
            name = index;
        }
    }
    return name;
}

console.log(bigestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
*/

//Ex 5
let repetition = 0;
let arrayRepetition = [];

function quemMaisSeRepete (array = []){
    let numero = array [0];
    for (let index of array){
        for (let index2 of array){
            if (index2 === index){
                repetition += 1;
            }        
        }
        arrayRepetition.push(repetition);
        repetition = 0
    }
    console.log(arrayRepetition);
    let highestValue = arrayRepetition [0];
    let indexHighestValue = 0;
    for (let index of arrayRepetition){
        if ( index > highestValue ){
            highestValue = index;
            indexHighestValue = arrayRepetition[index];
            console.log(highestValue, 'no if'); 
        }
    }
    console.log('----------')
    numeroQueMaisAparece = array[indexHighestValue];
    console.log(highestValue);
    return numeroQueMaisAparece;
}
console.log(quemMaisSeRepete([5, 3, 2, 5, 8, 5, 5]));
