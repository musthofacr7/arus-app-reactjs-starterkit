import { axiosInstance } from '../config';

export const register = async data => {
  data = {
    email: data.email,
    name: data.name,
    nik: parseInt(data.nik),
    password: data.password,
    password_confirmation: data.password_confirmation,
    phone: data.phone
  };
  const response = axiosInstance.post('/register', data).catch(err => {
    console.log(err);
  });

  return response;
};
