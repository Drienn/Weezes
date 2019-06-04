import React from 'react';
import { string, func } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route as ReactRoute } from 'react-router';

export const Route = ({ path, component: Component, className }) => (
  <>
    <ReactRoute path={path} render={props => <Component {...props} className={className} />} />
  </>
);

export const Router = ({ className }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Hello!</h1>} className={className} />
    </Switch>
  </BrowserRouter>
);

Route.propTypes = {
  path: string.isRequired,
  className: string,
  component: func.isRequired,
};

Route.defaultProps = {
  className: '',
};

Router.propTypes = {
  className: string,
};

Router.defaultProps = {
  className: '',
};

export default Router;
