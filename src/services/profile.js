import { axiosInstance } from '../config';

export const getProfile = async id => {
  const response = axiosInstance.get('users/' + id);
  return response;
};
export const updateProfile = async (id, data) => {
  const response = axiosInstance.put('users/' + id, data);
  return response;
};
