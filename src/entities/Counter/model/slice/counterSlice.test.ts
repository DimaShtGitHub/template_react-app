import { counterReducer, counterActions } from './counterSlice';
import { CounterShema } from '../types/counterShema';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: CounterShema = { value: 10 };

    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test('increment', () => {
    const state: CounterShema = { value: 10 };

    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
