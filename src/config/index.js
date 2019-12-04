import Axios from 'axios';

export const axiosInstance = Axios;

axiosInstance.interceptors.response.use(
  function(response) {
    console.log(response.data);
    return response.data;
  },
  function(err) {
    console.log(err);
    return Promise.reject(err);
  }
);
