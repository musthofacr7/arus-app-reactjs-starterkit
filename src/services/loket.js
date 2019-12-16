import { axiosInstance } from "../config";
const user = JSON.parse(localStorage.getItem("user"));

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

export const createAntrian = counter_id => {
  console.log(user);
  const response = axiosInstance.post(
    `counters/${counter_id}/users/${user.id}`
  );
  return response;
};

export const getAntrian = id => {
  const response = axiosInstance.get(`users/${id}/queue`);
  return response;
};

export const getAntrianHome = id => {
  const response = axiosInstance.get(`users/${id}/queue/last`);
  return response;
};

export const getHistory = id => {
  const response = axiosInstance.get(`users/${id}/queue`);
  return response;
};
