/* eslint-disable import/no-extraneous-dependencies */
import { ApiContext } from '@contexts/ApiContext';
import { ReactNode } from 'react';
import api from '@api/.';
import { render } from '@testing-library/react';

export const renderWithApi = (ui: ReactNode) => render(
  <ApiContext.Provider value={{ api }}>
    {ui}
  </ApiContext.Provider>,
);
