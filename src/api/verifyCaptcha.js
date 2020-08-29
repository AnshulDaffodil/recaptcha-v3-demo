import axios from './axios';

import CONFIG from './config';

const {RECAPTCHA_SECRET_KEY} = CONFIG;

// Api to send post request to the google recaptcha to verify that the passed token is valid or not
const verifyCaptcha = async (token) => {
  return await axios.post('', {
    secret: RECAPTCHA_SECRET_KEY,
    response: token
  })
  .then((response) => {
    console.info(response);
    return response
  })
  .catch((error) => {
    console.error(error);
  });
};

export default verifyCaptcha;
