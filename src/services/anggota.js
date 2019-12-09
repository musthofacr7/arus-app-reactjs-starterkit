import { axiosInstance } from '../config';

export const getListAnggota = async () => {
  const response = axiosInstance.get('users');

  return response;
};
export const getDetailAnggota = async id => {
  const response = axiosInstance.get(`users/${id}`);
  return response;
};
