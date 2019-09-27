const addNumbers = string => {
  let delimCount = 0;
  let equation = '';
  if (string.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < string.length; i++) {
      // if delimCount equals two, the max of 2 numbers has been met
      // slice is used to return a string without a hanging +
      if (delimCount === 2) {
        return eval(equation.slice(0, equation.length - 1));
      }
      // if char is a number, add to equation string
      if (!isNaN(parseFloat(string[i]))) {
        equation += string[i];
      }
      // if char is not a number or delim, make it a 0
      if (
        isNaN(parseFloat(string[i])) &&
        string[i] !== ',' &&
        string[i] !== '.'
      ) {
        equation += '0';
      }

      // replace all delims with +, increment delimCount
      if (string[i] === ',' && delimCount < 2) {
        equation += '+';
        delimCount++;
      }
      // in case of decimals
      if (string[i] === '.') {
        equation += '.';
      }
    }
  }

  // feed the equation string to eval method
  return eval(equation);
};
module.exports = addNumbers;
