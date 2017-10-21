import React from 'react';

const SingleBox = (props) => {
   return(
      <div className="SingleBox">
         <p>{props.name}</p>
         <img src={props.image} alt={props.name} className="u-max-full-width" />
      </div>
   );
}

export default SingleBox;