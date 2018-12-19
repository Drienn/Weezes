import axios from 'axios';
import axiosConfig from '../axiosConfig';
import * as types from '../constants/types';

// Base URL Goes Here: need to change to the itt api when we get that url
const baseUrl = 'http://localhost:5000';
// const baseUrl = 'https://pae-tdp-api.azurewebsites.net/api/v1';

const api = ({ dispatch }) => next => action => {
  if (action.type !== types.API) {
    return next(action);
  }

  const { method, path, body, success, failure } = action.payload;

  const label = `${method}${path}`;

  //   dispatch(startTransaction(storeName));

  return axios[method](`${baseUrl}${path}`, body || axiosConfig(), body && axiosConfig())
    .then(res => {
      dispatch(success(res));
      //   dispatch(endTransaction(storeName));
    })
    .catch(err => {
      console.log('hit catch', action, label, err);
      if (err.response && err.response.status !== 200) {
        // dispatch(logNetworkError(err, label));
      } else {
        // dispatch(logClientError(err, action));
      }
      if (failure) dispatch(failure(err));
      //   if (err.response && err.response.status === 401) dispatch(logoutUser());
      //   dispatch(endTransaction(storeName));
    });
};

export default api;
