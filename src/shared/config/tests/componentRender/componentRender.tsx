import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
  route?: string,
  inirialState?: DeepPartial<StateSchema>
}

// обертка для компонента который мы тестируем
export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    inirialState,
  } = options;

  return render(
    <StoreProvider inirialState={inirialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
