import React from 'react';
import { string, func } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route as ReactRoute } from 'react-router';
import { Header, NotFound, Main } from '../atoms';
import { Shop } from '../organisms';

export const Route = ({ path, component: Component, className }) => (
  <>
    <Header className="header" />
    <ReactRoute path={path} render={props => <Component {...props} className={className} />} />
  </>
);

export const Router = ({ className }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} className={className} />
      <Route path="/shop" component={Shop} className={className} />
      <ReactRoute component={NotFound} />
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
