import { axiosInstance } from '../config';

export const login = async () => {
  const response = axiosInstance.post('http://api-arus.herokuapp.com/api/login');
  return response;
};
