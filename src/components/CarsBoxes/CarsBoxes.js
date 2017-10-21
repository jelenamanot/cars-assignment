import React from 'react';

import SingleBox from './SingleBox';

import './carsBoxes.scss';

class CarsBoxes extends React.Component {
   render() {
      return(
         <div className="CarsBoxes">
            {
               this.props.cars.map((car, index) => {
                  return <SingleBox 
                           key={car.id} 
                           name={car.name}
                           image={car.image}
                         />
               })
            }
         </div>
      );
   }
}

export default CarsBoxes;