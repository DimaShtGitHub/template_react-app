import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('to be in document', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('have class clear', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
