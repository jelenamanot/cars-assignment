import React from 'react';
import './onRace.scss';

class OnRace extends React.Component {
   checkSpeedIndex = (element) => {
      return element === this.props.speed;
   }

   render(){
      let moveCarStyle = {
         position: 'absolute', 
         left: '1000px'
      };
   
      let rankStyle = {
         position: 'absolute', 
         left: '940px'
      };

      let rankPosition = this.props.sortedSpeed.findIndex(this.checkSpeedIndex) + 1;
   
      return(
         <tr className="OnRace">
            { 
               this.props.moveCars ? 
               <th style={rankStyle}>
                  <span>
                    {rankPosition}
                  </span>
               </th> 
               : null 
            }
            <th scope="row" style={this.props.moveCars ? moveCarStyle : {}}>
               <img src={this.props.image} />
            </th>
         </tr>
      );
   }
}

export default OnRace;