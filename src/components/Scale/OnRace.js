import React from 'react';

const OnRace = (props) => {
   return(
      <tr style={{height:'60px'}}>
         <th scope="row" style={{position: 'absolute', left: '900px', border: 'none'}}>
            <img style={{ height: '40px', width: '60px' }} src={props.image} />
         </th>
      </tr>
   );
}

export default OnRace;