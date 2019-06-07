import React from 'react';
import { string, func } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route as ReactRoute, Redirect } from 'react-router';
import { Login, NotFound } from 'components/pages/';

export const Route = ({ path, component: Component, className }) => (
  <>
    {localStorage.getItem('token') ? (
      <ReactRoute path={path} render={props => <Component {...props} className={className} />} />
    ) : (
      <Redirect to="/login" />
    )}
  </>
);

export const Router = ({ className }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello!</h1>} className={className} />
      <Route exact path="/login" component={Login} className={className} />
      <Route component={NotFound} className={className} />
    </Switch>
  </BrowserRouter>
);

Route.propTypes = {
  path: string,
  className: string,
  component: func.isRequired,
};

Route.defaultProps = {
  path: undefined,
  className: '',
};

Router.propTypes = {
  className: string,
};

Router.defaultProps = {
  className: '',
};

export default Router;
