import { axiosInstance } from '../config';

export const getListLoket = async => {
  const response = axiosInstance.get('counters');
  return response;
};
