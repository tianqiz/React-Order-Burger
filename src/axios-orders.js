import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-59ac8.firebaseio.com/'
});

export default instance;