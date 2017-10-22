import React from 'react';

import SingleBox from './SingleBox';
import Search from '../Search/Search';

import './carsBoxes.scss';

class CarsBoxes extends React.Component {
   constructor() {
      super();
      this.state = {
         search: ''
      }
   }

   updateSearch = (e) => {
      this.setState({search: e.target.value.substr(0,20)});
   }

   render() {
      let filteredCars = this.props.cars.filter(
         (car) => {
            return car.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         }
      );
      
      return(
         <div className="CarsBoxes">
            <Search 
               search={this.state.search} 
               updateSearch={this.updateSearch} 
               placeholder="Search cars by name"
            />
            <div className="row">
            {
               filteredCars.map((car, index) => {
                  return <SingleBox 
                           key={car.id} 
                           name={car.name}
                           image={car.image}
                         />
               })
            }
            </div>
         </div>
      );
   }
}

export default CarsBoxes;