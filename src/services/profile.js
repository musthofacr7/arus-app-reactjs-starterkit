import { axiosInstance } from "../config";

export const getProfile = id => {
  const response = axiosInstance.get("users/" + id);
  return response;
};
export const updateProfile = (id, data) => {
  const response = axiosInstance.put("users/" + id, data);
  return response;
};
