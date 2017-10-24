import React from 'react';
import { connect } from 'react-redux';

// Fetching data
import CarsService from '../utils/FetchData';

// Components
import Header from './Header/Header';
import CarsBoxes from './CarsBoxes/CarsBoxes';
import Footer from './Footer/Footer';
import OnRace from './Scale/OnRace';

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
      };
      let columnStyle = {
        width: tableWidth / 10,
        textAlign: 'center'
      };
      return(
         <div className="container-fluid">
            <Header />
            <main className="mainContainer">
               <CarsBoxes cars={this.state.cars} />
               <div className="aligner">
                  <table className="table table-striped" style={tableStyle}>
                     <tbody>
                        <tr scope="row">
                           <th style={columnStyle}>1xN</th>
                           <th style={columnStyle}>2xN</th>
                           <th style={columnStyle}>3xN</th>
                           <th style={columnStyle}>4xN</th>
                           <th style={columnStyle}>5xN</th>
                           <th style={columnStyle}>6xN</th>
                           <th style={columnStyle}>7xN</th>
                           <th style={columnStyle}>8xN</th>
                           <th style={columnStyle}>9xN</th>
                           <th style={columnStyle}>10xN</th>
                        </tr>
                        {
                          this.props.selectedCarsArray.map((selectedCar, index) => {
                             return <OnRace key={index} image={selectedCar.image} />  
                          })
                       }
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