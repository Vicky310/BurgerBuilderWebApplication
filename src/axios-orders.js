import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-burgerapplication.firebaseio.com'
});

export default axiosInstance;
