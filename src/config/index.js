import Axios from "axios";

const token = localStorage.getItem("userToken");
export const axiosInstance = Axios.create({
  baseURL: "https://api-arus.herokuapp.com/api/",
  headers: {
    Authorization: token
  }
});

axiosInstance.interceptors.response.use(
  function(response) {
    console.log(response.data.data);
    return response.data.data;
  },
  function(err) {
    console.log(err);
    return Promise.reject(err);
  }
);
