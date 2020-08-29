import React from 'react'
import PropTypes from 'prop-types'

import CONFIG from '../../api/config';

const {RECAPTCHA_SITE_KEY} = CONFIG;

const Button = ({ title, recaptchaSiteKey, recaptchaCallbackName, recaptchaAction, onClick, ...props }) => {
  return (
    // We can uncomment and pass below attibutes to button in case we use
    // "Automatically bind recaptcha challenge to a button"
    <button
      // className='g-recaption'
      // data-sitekey={recaptchaSiteKey}
      // data-callback={recaptchaCallbackName}
      // data-action={recaptchaAction}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  recaptchaSiteKey: PropTypes.string,
  recaptchaCallbackName: PropTypes.string,
  recaptchaAction: PropTypes.string
}

Button.defaultProps = {
  recaptchaSiteKey: RECAPTCHA_SITE_KEY,
  recaptchaCallbackName: 'onSubmit',
  recaptchaAction: 'submit'
}

export default Button;



