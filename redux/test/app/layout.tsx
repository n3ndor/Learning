import { Provider } from 'react-redux';
import { store } from '../store';
import type { AppProps } from 'next/app'

const Layout: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default Layout;
