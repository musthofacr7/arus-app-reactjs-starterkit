import { axiosInstance } from '../config';

export const login = async data => {
  const response = axiosInstance.post('/login', data);

  return response;
};
