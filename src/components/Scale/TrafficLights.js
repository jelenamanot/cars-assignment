import React from 'react';
import './trafficLights.scss';

class TrafficLights extends React.Component {
   constructor() {
      super();
      this.state = {
         isActive: false
      }
   }

   componentWillMount() {
      setInterval(() => {
         this.setState({isActive: !this.state.isActive})
      }, this.props.duration);
   }

   render() {
      let colorUp = this.state.isActive ? 'lightgray' : 'red'; 
      let colorDown = this.state.isActive ? 'green' : 'lightgray'; 
      return (
         <div 
            className="trafficSign"
            style={{left: this.props.tableWidth / this.props.distance * this.props.position - 30}}
         >
            <div style={{ backgroundColor: colorUp }} className="trafficCircle"></div>
            <div style={{ backgroundColor: colorDown }} className="trafficCircle"></div>
         </div>
      );
   }
}

export default TrafficLights;