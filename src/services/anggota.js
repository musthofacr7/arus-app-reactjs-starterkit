import { axiosInstance } from '../config';

export const getListAnggota = async () => {
  const response = axiosInstance.get('./local-data/anggota.json');
  return response;
};
