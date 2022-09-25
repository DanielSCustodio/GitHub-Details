import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Repository from './page/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositorio/:repositorio" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
