import React from 'react';
import './trafficLights.scss';

class TrafficLights extends React.Component {
   render() {
      return(
         <div className="TrafficLights">
         {
            this.props.trafficLights.map((trafficL, index) => {
               return <div 
                        className="trafficSign"
                        key={index} 
                        style={{left: this.props.tableWidth / this.props.distance * trafficL.position - 30}}
                        >
                           <div className="trafficCircle"></div>
                           <div className="trafficCircle"></div>
                     </div>
            })
         }
         </div>
      );
   }
}

export default TrafficLights;