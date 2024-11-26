import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'https://be-project-reactjs.onrender.com/api/v1',
    timeout: 10000,
    headers: {
        'Content-type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default axiosClient;
