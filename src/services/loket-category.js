import { axiosInstance } from '../config';

export const getListLoket = async () => {
  const response = axiosInstance.get('./local-data/loket-category.json');
  return response;
};
