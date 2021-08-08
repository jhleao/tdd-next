import type { AppProps } from 'next/app';
import '@src/fonts.css';
import GlobalStyle from 'GlobalStyle';
import { ApiProvider } from '@contexts/ApiContext';
import { UserProvider } from '@contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </ApiProvider>
  );
}
export default MyApp;
