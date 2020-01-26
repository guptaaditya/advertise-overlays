
import React from 'react';
import Logo from 'views/logo/logo';

const logoUrl = 'https://encryptics.com/wp-content/uploads/2019/11/EClogoLight-1.svg';
const logoE = 'https://encryptics.com/wp-content/uploads/2019/06/cropped-Encryptics-Logo-square-192x192.png';

function Header() {
  return (
    <Logo url={logoE} />
  );
}

export default Header;
