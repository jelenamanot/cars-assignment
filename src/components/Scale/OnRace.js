import React from 'react';

const OnRace = (props) => {
   return(
      <tr>
         <th scope="row">
            <img style={{ height: '40px', width: '60px' }} src={props.image} />
         </th>
      </tr>
   );
}

export default OnRace;