const customDelim = input => {
  let newInput;
  let delim;

  let string = input.replace(/\\n/g, ',');
  let newstring = string.substring(string.indexOf(',') + 1, string.length);

  if (input.match('//')) { // check for custom delimiter format

    if (input[2] === '[') { // check for custom delimiter longer than 1 character
      const inputDelim = input.match(/\[.*?\]/g).toString(); // gets all custom delims
      delim = inputDelim.split(',');

      const stringConverstion = (str, array) => {
        if (array.length >= 1) {
          let current = array[0].substring(1, array[0].length - 1); // current represents one delim at a time
          let newStr = str.split(current).join(); // split input str on current delim, join again to add comma
          array = array.slice(1, array.length + 1) // shorten array by 1
          stringConverstion(newStr, array) // recursively call func again until array is empty
        } else {
            newInput = str;
        }
      }

      stringConverstion(newstring, delim);
      return newInput.split(',');
    } else {
      delim = input[2]; // for single character custom delimiter
    }

    newLineSplit = input.split(/\\n/).join();
    newInput = newLineSplit
    .split(delim) // splits on the custom dilimiter
    .join()
    .replace(/[a-z]/g, 0)
    .split(','); // splits one more time to complete separation
  } else {
    newInput = input // handles all non-custom delimiters
    .replace(/\\n/g, ',')
    .replace(/[a-z]/g, 0)
    .split(',');
  }

  return newInput;
}

module.exports = customDelim;