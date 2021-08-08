import {
  screen, render, mockApi, rest, userEvent, renderWithApi, baseURL,
} from '@tests/.';
import RegisterView from '.';

describe('RegisterView', () => {
  it('should render all fields correctly', () => {
    render(<RegisterView />);

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const password2Field = screen.getByTestId('password-confirmation-input');
    const emailField = screen.getByTestId('email-input');

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(password2Field).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
  });

  it('should not render loading initially', () => {
    render(
      <RegisterView />,
    );

    const loadingBar = screen.queryByTestId('loading-bar');

    expect(loadingBar).not.toBeInTheDocument();
  });

  it('should initially not render any errors', () => {
    render(
      <RegisterView />,
    );

    const errorBox = screen.queryByTestId('error-box');

    expect(errorBox).not.toBeInTheDocument();
  });

  it('should correctly render fallback error', async () => {
    mockApi.use(
      rest.post(`${baseURL}/auth/register`,
        (req, res, ctx) => res(ctx.status(401), ctx.json({ title: 'Any error...' }))),
    );

    renderWithApi(
      <RegisterView />,
    );

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const passwordConfirmField = screen.getByTestId('password-confirmation-input');
    const button = screen.getByTestId('confirm-button');

    userEvent.type(usernameField, 'Anything');
    userEvent.type(passwordField, 'Anything');
    userEvent.type(passwordConfirmField, 'Anything');
    userEvent.click(button);

    const fallbackError = await screen.findByText('Something went wrong.');

    expect(fallbackError).toBeInTheDocument();
  });

  it('should correctly password do not match error', async () => {
    mockApi.use(
      rest.post(`${baseURL}/auth/register`,
        (req, res, ctx) => res(ctx.status(401), ctx.json({ title: 'Any error...' }))),
    );

    renderWithApi(
      <RegisterView />,
    );

    const usernameField = screen.getByTestId('login-input');
    const passwordField = screen.getByTestId('password-input');
    const passwordConfirmField = screen.getByTestId('password-confirmation-input');
    const button = screen.getByTestId('confirm-button');

    userEvent.type(usernameField, 'Anything');
    userEvent.type(passwordField, 'Anything');
    userEvent.type(passwordConfirmField, 'Anything2');
    userEvent.click(button);

    const fallbackError = await screen.findByText('Passwords do not match.');

    expect(fallbackError).toBeInTheDocument();
  });
});
