import { axiosInstance } from '../config';

export const getDetailAnggota = async id => {
  const response = axiosInstance.get(`../local-data/${id}.json`);
  return response;
};
