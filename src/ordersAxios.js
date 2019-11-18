import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizzaorder-dbb46.firebaseio.com/'
});

export default instance;