import { useUser } from '@contexts/UserContext';
import RegisterView from '@views/Register';
import Router from 'next/dist/client/router';
import Head from 'next/head';

export default function Register() {
  const { user } = useUser();
  if (user) Router.push('/');

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterView />
    </>
  );
}
