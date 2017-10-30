import React from 'react';
import './onRace.scss';

class OnRace extends React.Component {
   checkSpeedIndex = (element) => {
      return element === this.props.speed;
   }

   render(){
      let calcRaceDuration = this.props.raceDurationInput / this.props.speed;

      let moveCarStyle = {
         transform: 'translateX(900px)',
         transition: 'all 5s linear',
         transitionDuration: calcRaceDuration + 's'
      };
   
      let rankStyle = {
         position: 'absolute', 
         left: '940px',
         marginTop: '5px'
      };

      let rankPosition = this.props.sortedSpeed.findIndex(this.checkSpeedIndex) + 1;
      
      let styleSpan;
      switch (rankPosition) {
         case 1:
            //gold
            styleSpan = '#D4AF37';
            break;
         case 2:
            //silver
            styleSpan = '#BCC6CC';
            break;
         case 3:
            //bronze
            styleSpan = '#CD7F32';
            break;
         default:
            break;
      }
   
      return (
         <tr className="OnRace">
            { 
               this.props.moveCars ? 
               <th style={rankStyle}>
                  <span className="rankSpan" style={{backgroundColor: styleSpan}}>
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