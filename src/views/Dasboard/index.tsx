import BigButton from '@components/Buttons/BigButton';
import { useUser } from '@contexts/UserContext';
import Router from 'next/router';
import { useApi } from '@contexts/ApiContext';
import { Container } from './styles';

const DashboardView = () => {
  const { user, setUser } = useUser();
  const { api } = useApi();

  const logoutHandler = () => {
    api
      .post('/auth/logout')
      .then(() => {
        api.defaults.headers.Authorization = 'Bearer ';
        setUser(null);
        Router.push('/login');
      })
      .catch(console.log);
  };

  return (
    <Container>
      <h1>Welcome, {user.username}!</h1>
      <div>{user.email}</div>
      <BigButton onClick={logoutHandler}>Logout</BigButton>
    </Container>
  );
};

export default DashboardView;
