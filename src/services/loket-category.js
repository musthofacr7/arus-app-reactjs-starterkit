import { axiosInstance } from '../config';

export const getListLoket = async (id,data) => {
  const response = axiosInstance.get(`counters/${id}`, data);
  return response;
};
