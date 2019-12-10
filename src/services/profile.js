import { axiosInstance } from '../config';

export const getProfile = async id => {
  const response = axiosInstance.get('users/' + id);
  return response;
};
