import { axiosInstance } from '../config';

export const getListAnggota = async () => {
  const response = axiosInstance.get('users');
  return response;
};
