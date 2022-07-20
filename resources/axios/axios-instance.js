import axios from "axios";

const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

instance.interceptors.response.use(function (response) {
   return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance
