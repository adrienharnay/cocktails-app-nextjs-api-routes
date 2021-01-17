import 'normalize.css';
import 'src/styles/normalize.scss';
import 'src/styles/global.scss';

import type { AppProps } from 'next/app';
import React, { FunctionComponent } from 'react';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="content">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
