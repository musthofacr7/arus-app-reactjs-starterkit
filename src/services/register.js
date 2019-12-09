import { axiosInstance } from '../config';

export const register = async data => {
  const response = axiosInstance.post('/register', data).catch(err => {
    console.log(err);
  });

  return response;
};
