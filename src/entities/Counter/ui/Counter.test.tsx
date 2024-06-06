import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      inirialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      inirialState: { counter: { value: 10 } },
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      inirialState: { counter: { value: 10 } },
    });
    // 1 вариант
    // const decrementBtn = screen.getByTestId('decrement-btn');
    // fireEvent.click(decrementBtn);

    // 2 вариант
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
