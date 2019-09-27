const addNumbers = string => {
  let newString = string.replace(/\\n/g, ',');
  let equation = '';

  if (string.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < newString.length; i++) {
      // if char is a number, add to equation(newString
      if (!isNaN(parseFloat(newString[i]))) {
        equation += newString[i];
      }
      // if char is not a number or delim, make it a 0
      if (
        isNaN(parseFloat(newString[i])) &&
      newString[i] !== ',' &&
      newString[i] !== '.'
      ) {
        equation += '0';
      }

      // replace all delims with +
      if (newString[i] === ',') {
        equation += '+';
      }

      // in case of decimals
      if (newString[i] === '.') {
        equation += '.';
      }
    }

    // find and remove any hanging +, then feed equation to eval method
    if (equation.charAt(equation.length - 1) === '+') {
      return eval(equation.slice(0, equation.length - 1));
    } else {
      return eval(equation);
    }
  }
};

module.exports = addNumbers;
