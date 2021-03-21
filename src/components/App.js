import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

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
    <div>
      <h1>Calculator App</h1>
      <Display result={(next && next.toString()) || (total && total.toString())} />
      <ButtonPanel clickHandler={data => handleClick(data)} />
    </div>
  );
};

export default App;
