import Axios from 'axios';
import React from 'react';
import Calculator from './Calculator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.trackInput = this.trackInput.bind(this);
  }

  handleClick() {
    Axios.post('/', { input: this.state.input })
      .then(res =>
        this.setState({
          input: '', // clear input field
          output: res.data // display result in output field
        })
      )
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
