import React from 'react';

import './header.scss';

const Header = (props) => {
   return(
      <header className="Header row">
         <div className="col-md-12">
            <h2>{props.heading}</h2>
         </div>
      </header>
   );
}

export default Header;