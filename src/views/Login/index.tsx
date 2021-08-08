import BigButton from '@components/Buttons/BigButton';
import MinLink from '@components/Buttons/MinLink';
import TextInput from '@components/Fields/TextInput';
import { useApi } from '@contexts/ApiContext';
import { useUser } from '@contexts/UserContext';
import { TokenResponse } from '@ts/.';
import { AxiosResponse } from 'axios';
import { useState, SyntheticEvent } from 'react';
import { BsFillPersonFill, BsLockFill } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';
import {
  Container, Card, LoadingBar, ErrorBox, Form,
} from './styles';

const LoginView = () => {
  const { api } = useApi();
  const { setUser } = useUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (msg: string) => {
    setErrorMessage(msg);
    setErrorVisible(true);
  };

  const resetError = () => {
    setErrorMessage('');
    setErrorVisible(false);
  };

  const handleLoginError = (e: string) => {
    if (e === 'Username not found.') return showError('User not found.');
    if (e === 'Incorrect password.') return showError('Incorrect password.');
    return showError('Something went wrong.');
  };
  
  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    resetError();

    setLoading(true);

    api
      .post('/auth/login', { username, password })
      .then(({ data: { user, token } }
      :AxiosResponse<TokenResponse>) => {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(user);
      })
      .catch((error) => handleLoginError(error.response?.data?.title))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Card>
        {loading && <LoadingBar data-testid='loading-bar'/>}
        <h1 style={{ marginBottom: 0 }}>Welcome!</h1>
        <p>Please log in.</p>
        {errorVisible && <ErrorBox data-testid='error-box'>{errorMessage}</ErrorBox>}
        <Form onSubmit={handleLogin} method='POST'>
          <TextInput
            value={username}
            set={setUsername}
            Icon={BsFillPersonFill}
            placeholder='Username'
            dataTestId='login-input'
            required
          />
          <TextInput
            value={password}
            set={setPassword}
            Icon={BsLockFill}
            placeholder='Password'
            type='password'
            dataTestId='password-input'
            required
          />
          <BigButton type='submit' disabled={loading} dataTestId='confirm-button'>
            Confirm
            <MdSend />
          </BigButton>
          <MinLink href='/register'>Create an account</MinLink>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginView;
