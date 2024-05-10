function calculator(a, b, operator) {
    let result  = null;
    
  switch (operator) {
    case "+":
      result = a + b;
      break
      
    case "-":
     result = a - b;
     break
    case "/":
      result = a / b;
      break

    case "*":
      result = a * b;
      break

    default:
        throw new Error("operators must be contained in");
  }

  return result
}

module.exports = calculator;
