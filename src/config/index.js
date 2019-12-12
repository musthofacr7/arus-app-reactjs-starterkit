import Axios from "axios";
import swal from 'sweetalert';

const token = localStorage.getItem("userToken");
export const axiosInstance = Axios.create({
  baseURL: "https://api-arus.herokuapp.com/api/",
  headers: {
    Authorization: token
  }
});

axiosInstance.interceptors.response.use(
  function(response) {
    console.log(response.data);
    return response.data;
  },
  function(err) {
    console.log(err);
    return Promise.reject(err);
  }
);
