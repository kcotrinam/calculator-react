import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../scss/components/calculator.scss';
import '../scss/base/reset.scss';
import Title from './shared/Title';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const data = { ...state };
    const calculation = calculate(data, buttonName);
    setState({ ...calculation });
  };

  const { next, total } = state;
  return (
    <>
      <div className="wrapper">
        <Title title="Let's do some maths" />
        <div className="right">
          <div className="calculator-container">
            <Display result={(next && next.toString()) || (total && total.toString())} />
            <ButtonPanel clickHandler={data => handleClick(data)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
