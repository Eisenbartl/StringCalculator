const addNumbers = string => {
  let newString = string
  .replace(/\\n/g, ',')
  .replace(/[a-z]/g, 0)
  .split(',');
  const posArray = [];
  const negArray = [];
  const doubleSlash = '//'
  let sum = '';

  // if (string.includes(doubleSlash)) {
  //   customDelim = string[3];
  //   let reg = new RegExp(customDelim, 'g');
  //   newString = string
  //     .replace(/\\n/g, ',')
  //     .replace(/[a-z]/g, 0)
  //     .split(',');
  // }


  if (string === '') {
    sum = 0;
  } else {
    for (let i = 0; i < newString.length; i++) {
      // if char is a positive number, push to posArry
      if (!isNaN(parseFloat(newString[i])) && Number(newString[i]) > -1 && Number(newString[i] <= 1000)) {
        posArray.push(newString[i])
      }
      // if char is a negative number, push to negArray
      if (!isNaN(parseFloat(newString[i])) && Number(newString[i]) < 0) {
        negArray.push(newString[i])
      }
    }

    // if posArr doesn't = 0, join posArray, replace all ',' with '+' and feed the result to eval method
    if (posArray === ['0']) {
      sum = 0
    } else {
      sum = eval(posArray.join().replace(/,/g, '+'));
    }
  }

  // send back sum and any denied negative numbers
  const result = {
    sum: sum.toString(),
    exceptions: negArray
  }
  return result;
};

// addNumbers('//;\n2;5\n1;35')

module.exports = addNumbers;
