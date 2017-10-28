import React from 'react';
import './onRace.scss';

const OnRace = (props) => {
   let moveStyle = {
      position: 'absolute', 
      left: '900px'
   }
   return(
      <tr className="OnRace">
         <th scope="row" style={props.moveCars ? moveStyle : {}}>
            <img src={props.image} />
         </th>
      </tr>
   );
}

export default OnRace;