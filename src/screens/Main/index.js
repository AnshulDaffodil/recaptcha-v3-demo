import React, { useCallback } from 'react';

import CONFIG from '../../api/config';
import verifyCaptcha from '../../api/verifyCaptcha';

import Button from '../../components/Button';

import './main.css';

const { RECAPTCHA_SITE_KEY } = CONFIG;

const recaptachInstance = window.grecaptcha;


const Main = () => {

  const handleOnclick = useCallback(() => {
    if (recaptachInstance) {
      const { ready, execute } = recaptachInstance;
      ready(() => {
        // Calling recaptcha execute method on button action
        execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
          console.log('*****Token by google recaptcha of user action*******',token);
          if (token) {
            const response = typeof verifyCaptcha === 'function' && verifyCaptcha(token);
            console.log('*****Verified response from google recaptcha*******',response);
            // The response is a JSON object containing success/failure of the token verification from google recaptcha
            // Based on this response we can take action against the failed verifications 
          }
        });
      });
    }
  }, []);

  return (
    <div className='main'>
      <h1>{'Recaptcha V3 Demo'}</h1>
      <h2>{'Click below button to exectue an action for recaptcha'}</h2>
      <Button title='Click me' onClick={handleOnclick} />
    </div>
  );
};

export default Main;
