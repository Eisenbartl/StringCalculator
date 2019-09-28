import Axios from 'axios';
import React from 'react';
import Rules from './Rules.jsx';
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

  // function for displaying exeptions to user
  exceptionAlert() {
    const exceptions = this.state.exceptions;
    const array = [];
    let error = 'formatting error, please see rules of use';

    if (exceptions.length > 0 && exceptions[0] !== 'formatting error') {
      for(let i = 0; i < exceptions.length; i++) {
          array.push(exceptions[i])
        }
        error = `This app only allows positivity, begone with your negatives ${array}, see rules of use`
        alert(error);
    }

    if (exceptions[0] === 'formatting error') {
      alert(error)
    }
  }

  // send user input to server via axios post request
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

  // track user input function
  trackInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className='app-body'>
        <Rules />
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
