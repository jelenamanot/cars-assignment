import React from 'react';
import './speedLimits.scss';

const SpeedLimits = (props) => {
   return(
      <div className="speedLimits">
      {
         props.speedLimits.map((speedLimit, index) => {
            return  <div 
                        key={index} 
                        className="aligner speedSign" 
                        style={{left: props.tableWidth / props.distance * speedLimit.position - 30}}
                     >
                        <span>{speedLimit.speed}</span>
                     </div>
            
         })
      }
      </div>
   );
}

export default SpeedLimits;