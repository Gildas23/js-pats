function countOccurrences(string,char) {
    let numchar = 0;
    
    for (let index = 0; index < string.length; index++) {
        const currentCharacter = string[index];
        numchar += char === currentCharacter? 1:0;
        
    }

    return numchar
}

module.exports = countOccurrences;
