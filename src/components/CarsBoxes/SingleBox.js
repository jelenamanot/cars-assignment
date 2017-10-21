import React from 'react';

const SingleBox = (props) => {
   return(
      <div className="SingleBox col-md-4">
         <div className="wrapSingle col-md-8 offset-md-2">
            <p>{props.name}</p>
            <img src={props.image} alt={props.name} className="img-fluid" />
         </div>
         
      </div>
   );
}

export default SingleBox;