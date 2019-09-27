import Axios from 'axios';
import React from 'react';
import Calculator from './Calculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      exceptions: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.trackInput = this.trackInput.bind(this);
  }

  exceptionAlert() {
    const exceptions = this.state.exceptions;
    const array = [];
    if (exceptions.length > 0) {
      for(let i = 0; i < exceptions.length; i++) {
        array.push(exceptions[i])
      }
      alert(`This app only allows positivity, begone with your negatives ${array}`)
    }
  }

  handleClick() {
    Axios.post('/', { input: this.state.input })
      .then(res =>
        this.setState({
          input: '', // clear input field
          output: res.data.sum, // display result in output field
          exceptions: res.data.exceptions
        })
      )
      .then(() => this.exceptionAlert())
      .catch(err => console.log(err));
  }

  trackInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <Calculator
          handleClick={this.handleClick}
          trackInput={this.trackInput}
          input={this.state.input}
          output={this.state.output}
        />
      </div>
    );
  }
}

export default App;
