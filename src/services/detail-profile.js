import { axiosInstance } from '../config';

export const getDetailProfile = async id => {
  const response = axiosInstance.get(`users/${id}`);
  return response;
};
