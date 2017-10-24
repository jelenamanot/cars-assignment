import React from 'react';

import './header.scss';
import { logo } from '../../utils/images';

const Header = () => {
   return(
      <header className="Header row">
         <div className="col-md-12 aligner">
            <img src={logo} alt="logo" />
         </div>
      </header>
   );
}

export default Header;