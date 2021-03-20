import React from 'react';
import Button from './Button';

const BUTTONGROUP = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'x'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.'],
};

const ButtonPanel = () => {
  const renderButtons = group => group.map(name => (
    <Button
      key={name}
      name={name}
    />
  ));

  const {
    group1,
    group2,
    group3,
    group4,
    group5,
  } = BUTTONGROUP;

  return (
    <>
      <div className="panel-button">
        <div className="row">{renderButtons(group1)}</div>
        <div className="row">{renderButtons(group2)}</div>
        <div className="row">{renderButtons(group3)}</div>
        <div className="row">{renderButtons(group4)}</div>
        <div className="row">{renderButtons(group5)}</div>
        <Button name="=" />
      </div>
    </>
  );
};

export default ButtonPanel;
