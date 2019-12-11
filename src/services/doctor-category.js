import { axiosInstance } from "../config";

export const getDoctorCategory = async () => {
  const response = axiosInstance.get("doctors/category");
  return response;
};
