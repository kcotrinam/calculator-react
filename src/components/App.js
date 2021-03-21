import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const data = { ...this.state };
    const calculation = calculate(data, buttonName);
    this.setState({ ...calculation });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div>
        <h1>Calculator App</h1>
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel clickHandler={data => this.handleClick(data)} />
      </div>
    );
  }
}

export default App;
