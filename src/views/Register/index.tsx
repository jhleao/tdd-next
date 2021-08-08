import BigButton from '@components/Buttons/BigButton';
import MinLink from '@components/Buttons/MinLink';
import TextInput from '@components/Fields/TextInput';
import { useApi } from '@contexts/ApiContext';
import { useUser } from '@contexts/UserContext';
import { TokenResponse } from '@ts/.';
import { AxiosResponse } from 'axios';
import { useState, SyntheticEvent } from 'react';
import { BsFillPersonFill, BsLockFill } from 'react-icons/bs';
import { MdEmail, MdSend } from 'react-icons/md';

import {
  Container, Card, LoadingBar, ErrorBox, Form,
} from './styles';

const LoginView = () => {
  const { api } = useApi();
  const { setUser } = useUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');

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

  const handleRegisterError = (e: string) => showError('Something went wrong.');
  
  const handleRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    resetError();

    if (password !== password2) return showError('Passwords do not match.');

    setLoading(true);
    
    return api
      .post('/auth/register', { username, email, password })
      .then(({ data: { user, token } }
      :AxiosResponse<TokenResponse>) => {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(user);
      })
      .catch((error) => handleRegisterError(error.response?.data?.title))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Card>
        {loading && <LoadingBar data-testid='loading-bar'/>}
        <h1 style={{ marginBottom: 0 }}>Register</h1>
        <p>Create your account.</p>
        {errorVisible && <ErrorBox data-testid='error-box'>{errorMessage}</ErrorBox>}
        <Form onSubmit={handleRegister} method='POST'>
          <TextInput
            value={username}
            set={setUsername}
            Icon={BsFillPersonFill}
            placeholder='Username'
            dataTestId='login-input'
            required
          />
          <TextInput
            value={email}
            set={setEmail}
            Icon={MdEmail}
            type='email'
            placeholder='Email'
            dataTestId='email-input'
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
          <TextInput
            value={password2}
            set={setPassword2}
            Icon={BsLockFill}
            placeholder='Confirm your password'
            type='password'
            dataTestId='password-confirmation-input'
            required
          />
          <BigButton type='submit' disabled={loading} dataTestId='confirm-button'>
            Register
            <MdSend />
          </BigButton>
          <MinLink href='/login'>Already have an account?</MinLink>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginView;
