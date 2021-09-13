import axios from 'axios';

const client = axios.create({
    baseURL: "",
});

client.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default client;