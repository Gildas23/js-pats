function isPalindrome(str) {
    // word that read same foward and backword
    // remove all white spaces out of the palindrome
    let cleanedString = '';
    let reconstructedReverse = '';
    let spaces= [];

    if(str === ' ') return true;

    for (let index = 0; index < str.length; index++) {
        let letter = str[index] 

        if(letter !== ' '){
            cleanedString += letter;
            continue
        }

        spaces.push(index)
    }



    reversedString = reverseString(str)

    for(i=0;i < cleanedString.length;i++){

        reconstructedReverse += spaces[i] === i ? spaces[i] + cleanedString[i] : cleanedString[i]
    }

    console.log(`revsered : |${reversedString}\nreconstructedReverse : |${reconstructedReverse}\ncleaned : |${cleanedString}\n`)

    if(str === reconstructedReverse){
        return true
    }

    return false
}

function reverseString(str) {
    let rev = '';

    for (let i=str.length-1; i>= 0; i--){

        rev += str[i];
    
    }
    
    return rev;
}


module.exports = isPalindrome;
