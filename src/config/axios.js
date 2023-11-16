import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVICE_URI;

const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;