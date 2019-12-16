import Axios from "axios";
import swal from "sweetalert";

const token = localStorage.getItem("userToken");
export const axiosInstance = Axios.create({
  baseURL: "https://api-arus.herokuapp.com/api/"
});

axiosInstance.interceptors.request.use(config => {
  let token = localStorage.getItem("userToken");
  config.headers = Object.assign(
    {
      Authorization: token
    },
    config.headers
  );
  return config;
});

axiosInstance.interceptors.response.use(
  function(response) {
    console.log(response.data);
    return response.data;
  },
  function(err) {
    console.log(err);
    window.location.href = "/login";
    return Promise.reject(err);
  }
);
