import React from 'react';

const Rules = props => (
  <div className='rules-body'>
    <h2>rules of use</h2>
    <ul>
      <li>This calculator only adds</li>
      <li>Letters will be converted to 0</li>
      <li>Negative numbers will be ignored</li>
      <li>Numbers over 1000 will be ignored</li>
      <li>An unlimited amount of numbers are accepted</li>
      <li>Numbers must be delimited by commas ',' or new line characters '\n'<br></br>
        example: 5,5 or 5\n
      </li>
      <li>Custom delimiters can be added using the format '//[delimiter]\n[number][delimiter][number]'<br></br>
        example: //;\n5;5
      </li>
    </ul>
  </div>
);

export default Rules;