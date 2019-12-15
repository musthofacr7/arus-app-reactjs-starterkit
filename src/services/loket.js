import { axiosInstance } from "../config";

export const getListLoket = () => {
  const response = axiosInstance.get("counters");
  return response;
};
export const currentQueue = (counter_id, users, user_id) => {
  const response = axiosInstance.get("counters", +counter_id + users + user_id);
  return response;
};
export const createQueue = id => {
  const response = axiosInstance.post(`users/${id}/queue/`);
  return response;
};

export const createAntrian = id => {
  const response = axiosInstance.post(`counters/${id}/call`);
  return response;
};

export const getAntrian = id => {
  const response = axiosInstance.get(`users/${id}/queue`);
  return response;
};

export const getHistory = id => {
  const response = axiosInstance.get(`users/${id}/queue`);
  return response;
};
