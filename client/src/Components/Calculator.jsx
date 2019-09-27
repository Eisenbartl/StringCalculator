import React from 'react';

const Calculator = props => (
  <div className='calculator-body'>
    <div className='calculator-i-o'>
      <input
        type='text'
        name='input'
        className='calculator-input'
        onChange={e => props.trackInput(e)}
        value={props.input}
        autoFocus
      />
      <div className='calculator-output'>
        <p>{props.output}</p>
      </div>
    </div>
    <button className='calculator-btn' onClick={() => props.handleClick()}>
      calculate
    </button>
  </div>
);

export default Calculator;
