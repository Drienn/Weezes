import React from 'react';
import { Switch, Route } from 'react-router';
import NewAtom from '../atoms/NewAtom/NewAtom';

const Router = () => (
  <Switch>
    <Route exact path="/" component={NewAtom} />
  </Switch>
);

export default Router;
