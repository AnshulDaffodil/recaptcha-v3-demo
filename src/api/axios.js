import axios from 'axios';

import CONFIG from './config';

const {GOOGLE_RECAPTCHA_URL} = CONFIG;

const axiosInstance = axios.create({
  baseURL: GOOGLE_RECAPTCHA_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
