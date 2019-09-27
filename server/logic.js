const addNumbers = string => {
  let equation = '';
  if (string.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < string.length; i++) {
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
      if (string[i] === ',') {
        equation += '+';
      }
      // in case of decimals
      if (string[i] === '.') {
        equation += '.';
      }
    }
  }

  // find and remove any hanging +, then feed equation to eval method
  if (equation.charAt(equation.length - 1) === '+') {
    return eval(equation.slice(0, equation.length - 1));
  } else {
    return eval(equation);
  }
};
module.exports = addNumbers;
