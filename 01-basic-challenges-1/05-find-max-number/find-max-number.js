function findMaxNumber(numbers) {
    let max = numbers[0];

    for(let i=1;i<numbers.length;i++){
            currentNumber = numbers[i];
            max =  currentNumber > max ? currentNumber:max
    }


    return max
}

module.exports = findMaxNumber;
