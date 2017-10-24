import React from 'react';
import { connect } from 'react-redux';

// Fetching data
import CarsService from '../utils/FetchData';

// Components
import Header from './Header/Header';
import CarsBoxes from './CarsBoxes/CarsBoxes';
import Scale from './Scale/Scale';
import Footer from './Footer/Footer';

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
      let tableWidth = this.state.distance * 20;
      let tableStyle = {
         width: tableWidth + "px"
      }
      return(
         <div className="container-fluid">
            <Header />
            <main className="mainContainer">
               <CarsBoxes cars={this.state.cars} />
               {
                  this.props.selectedCarsArray.map((selectedCar, index) => {
                     return <Scale 
                              key={index} 
                              name={selectedCar.name} 
                              id={selectedCar.id}
                              image={selectedCar.image}
                              speed={selectedCar.speed}
                           /> 
                  })
               }
               <div className="aligner">
                  <table className="table table-striped" style={tableStyle}>
                     <tbody>
                        <tr scope="row">
                           <th>Scale based on distance from API</th>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </main>
            <Footer />
         </div>
      );
   }
}

function mapStateToProps(store) {
   return {
      selectedCarsArray: store.homeReducer.selectedCarsArray
   }
}

export default connect(mapStateToProps, null)(App);