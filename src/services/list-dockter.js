import { axiosInstance } from '../config';

export const getListDockter = async () => {
  const response = axiosInstance.get('doctors/category');
  return response;
};

