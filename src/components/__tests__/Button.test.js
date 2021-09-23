/* eslint-disable no-restricted-syntax */
import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import Button from '../Button';
import Calculator from '../Calculator';

describe('calculator testing', () => {
  test('calculator contains all buttons', () => {
    const calcButtons = ['AC', '+/-', '!', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const handleClick = (e) => {
      expect(e.target.name).toEqual('÷');
    };

    render(
      <Calculator>
        <Button name={calcButtons[3]} id={calcButtons[3]} className="col-3 operature" handleClick={handleClick} />
      </Calculator>,
    );

    for (const btn of calcButtons) {
      expect(screen.getByText(btn)).toBeInTheDocument();
    }
  });

  test('clicking the button toggles the number', () => {
    render(<Calculator />);
    const button = screen.getByTestId('1');
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});

afterEach(cleanup);
