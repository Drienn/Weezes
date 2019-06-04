import { connect } from 'react-redux';
// import * as Actions from 'redux/actions';

export const withData = (Component) => {
  // const reduxState = () => ();
  const reduxState = null;

  const reduxActions = () => ({});
  // action: (...args) => dispatch(Actions.action(...args)),
  // });

  return connect(
    reduxState,
    reduxActions,
  )(Component);
};

export default withData;
