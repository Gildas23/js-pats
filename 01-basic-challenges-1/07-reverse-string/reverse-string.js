function reverseString(str) {
    let rev = '';

    for (let i=str.length-1; i>= 0; i--){

        rev += str[i];
    
    }
    
    // console.log(`reverse : ${revStr}\nnormal : ${str}`)
    return rev;
}

module.exports = reverseString;
