import React from 'react';

const style = {
  textAlign: 'center',
  borderTop: '1px solid var(--dark-red)',
  padding: '0.7rem',
};

const Footer = () => {
  return (
    <footer style={style}>
      {' '}
      <a href="https://woocashpirowski.com">Woo Cashpirowski</a>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
