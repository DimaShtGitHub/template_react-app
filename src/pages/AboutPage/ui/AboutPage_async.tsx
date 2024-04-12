import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import("./AboutPage"));

// искусственная задержка для того чтобы увидеть прелоудер
export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    // @ts-ignore
    //                     ТАК ДЕЛАТЬ НЕЛЬЗЯ!! ДЕЛАЕМ ДЛЯ КУРСА!!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
  }),
);
