import { useUser } from '@contexts/UserContext';
import LoginView from '@views/Login';
import Router from 'next/dist/client/router';
import Head from 'next/head';

export default function Login() {
  const { user } = useUser();
  if (user) Router.push('/');

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginView />
    </>
  );
}
