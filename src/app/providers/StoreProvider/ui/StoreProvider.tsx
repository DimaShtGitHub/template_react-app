import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  inirialState?: DeepPartial<StateSchema>
}
export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    inirialState,
  } = props;

  const store = createReduxStore(inirialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
