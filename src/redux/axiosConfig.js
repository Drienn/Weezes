const axiosConfig = localStorage.getItem('id_token')
  ? {
      headers: {
        accept: 'application/json',
        authorization: `Bearer ${localStorage.getItem('id_token')}`
      }
    }
  : {
      headers: {
        accept: 'application/json'
      }
    };
export default axiosConfig;
