import { axiosInstance } from "../config";

export const categoryTab = async () => {
  const response = axiosInstance.get("doctors/category");
  return response;
};

export const getDokter = async () => {
  const response = axiosInstance.get("doctors");
  return response;
};
