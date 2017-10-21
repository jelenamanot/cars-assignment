import React from 'react';

// Fetching data
import CarsService from '../utils/FetchData';

// Components
import CarsBoxes from './CarsBoxes/CarsBoxes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      distance: null,
      speedLimits: [],
      trafficLights: []
    }
  }

  componentWillMount() {
    CarsService.getAllData()
      .then(response => {
        this.setState({
           cars: response.data.cars,
           distance: response.data.distance,
           speedLimits: response.data.speed_limits,
           trafficLights: response.data.traffic_lights
        });
      })
      .catch(error => {
        console.log(error);
      });
   }

  render() {
    return(
      <div className="container">
        <CarsBoxes cars={this.state.cars} />
      </div>
    );
   }
}

export default App;