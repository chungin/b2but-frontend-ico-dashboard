import React from 'react';
import s from './styles.css';

const Failure = () => (
  <div className={s.body}>
    <div className={s.title}>Verification failure.</div>
    <div className={s.text}>
      We were unable to match your account information automatically and uploaded documents.
      Please reload the page and try again or contact B2B United Trade support.<br/><br/>
      <a href="mailto:support@b2but.com">support@b2but.com</a>
    </div>
  </div>
);

export default Failure;
