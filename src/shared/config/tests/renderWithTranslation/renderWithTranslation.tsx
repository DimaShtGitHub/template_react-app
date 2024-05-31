import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

// обертка для компонента который мы тестируем
// эта обертка убирает warn сообщение от (i18n) в терминале при запуске теста
export function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
  );
}
