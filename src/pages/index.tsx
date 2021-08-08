import { useUser } from '@contexts/UserContext';
import Router from 'next/dist/client/router';
import Head from 'next/head';
import DashboardView from '@views/Dasboard';

export default function Dashboard() {
  const { user } = useUser();
  if (!user) {
    Router.push('/login');
    return <></>;
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardView />
    </>
  );
}
