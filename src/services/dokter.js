import { axiosInstance } from "../config";

export const categoryTab = () => {
  const response = axiosInstance.get("doctors/category");
  return response;
};

export const getDokter = () => {
  const response = axiosInstance.get("doctors");
  return response;
};
export const getDetailDokter = id => {
  const response = axiosInstance.get(`doctors/${id}`);
  return response;
};
