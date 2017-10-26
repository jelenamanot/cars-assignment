import React from 'react';
import './trafficLights.scss';

class TrafficLights extends React.Component {
   render() {
      return (
         <div 
            className="trafficSign"
            style={{left: this.props.tableWidth / this.props.distance * this.props.position - 30}}
         >
            <div className="trafficCircle"></div>
            <div className="trafficCircle"></div>
         </div>
      );
   }
}

export default TrafficLights;