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

//Ex 2

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
