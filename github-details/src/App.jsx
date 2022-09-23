import React from 'react';
import Provider from './global/Provider';
import Routes from './routes';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <Routes />
      </Provider>
    </>
  );
}
