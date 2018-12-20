import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route as ReactRoute } from 'react-router';
import {
  Header, NotFound, Sidebar, Footer, Main,
} from '../atoms';

export const Route = ({ path, component: Component, className }) => (
  <>
    <Header className="header" />
    <ReactRoute path={path} render={props => <Component {...props} className={className} />} />
    <Sidebar className="sidebar" />
    <Footer className="footer" />
  </>
);

const Router = ({ className }) => (
  <Switch>
    <Route exact path="/" component={Main} className={className} />
    <ReactRoute component={NotFound} />
  </Switch>
);

Router.propTypes = {
  className: PropTypes.string,
};

Router.defaultProps = {
  className: '',
};

export default Router;
