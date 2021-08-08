import {
  screen, render, mockApi, rest, userEvent, renderWithApi, baseURL,
} from '@tests/.';
import LoginView from '.';

describe('LoginView', () => {
  it('should render login and password field and confirm button', () => {
    render(
      <LoginView />,
    );

    const loginInput = screen.getByTestId('login-input');
    const passwordInput = screen.getByTestId('password-input');
    const confirmButton = screen.getByTestId('confirm-button');

    expect(loginInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });

  it('should not render loading initially', () => {
    render(
      <LoginView />,
    );

    const loadingBar = screen.queryByTestId('loading-bar');

    expect(loadingBar).not.toBeInTheDocument();
  });

  it('should initially not render any errors', () => {
    render(
      <LoginView />,
    );

    const errorBox = screen.queryByTestId('error-box');

    expect(errorBox).not.toBeInTheDocument();
  });

  it('should correctly render username not found error', async () => {
    mockApi.use(
      rest.post(`${baseURL}/auth/login`,
        (req, res, ctx) => res(ctx.status(401), ctx.json({ title: 'Username not found.' }))),
    );

    renderWithApi(
      <LoginView />,
    );

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const button = screen.getByTestId('confirm-button');

    userEvent.type(usernameField, 'Anything');
    userEvent.type(passwordField, 'Anything');
    userEvent.click(button);

    const usernameError = await screen.findByText('User not found.');

    expect(usernameError).toBeInTheDocument();
  });

  it('should correctly render incorrect password error', async () => {
    mockApi.use(
      rest.post(`${baseURL}/auth/login`,
        (req, res, ctx) => res(ctx.status(401), ctx.json({ title: 'Incorrect password.' }))),
    );

    renderWithApi(
      <LoginView />,
    );

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const button = screen.getByTestId('confirm-button');

    userEvent.type(usernameField, 'Anything');
    userEvent.type(passwordField, 'Anything');
    userEvent.click(button);

    const usernameError = await screen.findByText('Incorrect password.');

    expect(usernameError).toBeInTheDocument();
  });

  it('should correctly render fallback error', async () => {
    mockApi.use(
      rest.post(`${baseURL}/auth/login`,
        (req, res, ctx) => res(ctx.status(401), ctx.json({ title: 'Any error...' }))),
    );

    renderWithApi(
      <LoginView />,
    );

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const button = screen.getByTestId('confirm-button');

    userEvent.type(usernameField, 'Anything');
    userEvent.type(passwordField, 'Anything');
    userEvent.click(button);

    const fallbackError = await screen.findByText('Something went wrong.');

    expect(fallbackError).toBeInTheDocument();
  });
});
