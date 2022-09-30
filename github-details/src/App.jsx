import React from 'react';
import Provider from './global/Provider';
import Header from './template/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Provider>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  );
}
