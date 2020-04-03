import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p> Bryce Frentz - Coronavirus Map,    &copy; { new Date().getFullYear() }</p>
      </Container>
    </footer>
  );
};

export default Footer;
