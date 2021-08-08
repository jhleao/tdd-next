/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import dotenv from 'dotenv';

import mockApi from './mockApi';
import { renderWithApi } from './renderWithApi';

dotenv.config({ path: '.env.test' });

beforeAll(() => {
  mockApi.listen();
});

afterEach(() => {
  mockApi.resetHandlers();
  cleanup();
});

afterAll(() => {
  mockApi.close();
});

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export {
  screen, render, userEvent, mockApi, rest, waitFor, renderWithApi, baseURL,
};
