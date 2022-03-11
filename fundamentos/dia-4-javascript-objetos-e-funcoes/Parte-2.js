//Ex 1

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
