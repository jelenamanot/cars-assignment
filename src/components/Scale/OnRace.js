import React from 'react';
import './onRace.scss';

const OnRace = (props) => {
   let moveCarStyle = {
      position: 'absolute', 
      left: '1000px'
   };

   let rankStyle = {
      position: 'absolute', 
      left: '920px'
   };

   return(
      <tr className="OnRace">
         { 
            props.moveCars ? 
            <th style={rankStyle}><span>{props.speed}</span></th> 
            : null 
         }
         <th scope="row" style={props.moveCars ? moveCarStyle : {}}>
            <img src={props.image} />
         </th>
      </tr>
   );
}

export default OnRace;