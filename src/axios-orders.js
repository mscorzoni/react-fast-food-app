import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerproject-e04c7.firebaseio.com/'
});

export default instance;