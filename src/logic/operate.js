import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  
  switch (operation) {
    case "+":
      return x,plus(y);
    case "-":
      return x,minus(y);
    case "/":
      return  y !== '0' ? x.div(y) : 'Division by zero is undefined';
    case "x":
      return x,times(y);
    default:
      return 'Not a possible operation.';
  }
}

export default operate;