import { axiosInstance } from '../config';

export const updateProfile = async data => {
  const response = axiosInstance.put('./local-data/profile.json', data);
  return response;
};
export const getProfile = async () => {
  const response = axiosInstance.get('./local-data/profile.json');
  return response;
};
