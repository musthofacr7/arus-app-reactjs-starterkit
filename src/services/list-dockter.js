import { axiosInstance } from '../config';

export const getListDockter = async () => {
  const response = axiosInstance.get('./local-data/list-dockter.json');
  return response;
};

