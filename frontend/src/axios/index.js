import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7775',
});

export default instance;