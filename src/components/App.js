import React from 'react';
import { connect } from 'react-redux';

// Fetching data
import CarsService from '../utils/FetchData';

// Components
import Header from './Header/Header';
import CarsBoxes from './CarsBoxes/CarsBoxes';
import SpeedLimits from './Scale/SpeedLimits';
import TrafficLights from './Scale/TrafficLights';
import Footer from './Footer/Footer';
import OnRace from './Scale/OnRace';

// Actions
import { resetCarsAction } from '../actions/homeActions';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         cars: [],
         distance: null,
         speedLimits: [],
         trafficLights: [],
         tableWidth: null,
         isDisabled: true
      }
   }

   componentWillMount() {
      CarsService.getAllData()
         .then(response => {
            this.setState({
               cars: response.data.cars,
               distance: response.data.distance,
               speedLimits: response.data.speed_limits,
               trafficLights: response.data.traffic_lights,
               tableWidth: response.data.distance * 20
            });
         })
         .catch(error => {
            console.log(error);
         });
   }

   resetCars = () => {
      this.props.resetCarsAction();
   }

   startRace = () => {
     console.log('to do')
   }

   onChangeRaceDuration = (e) => {
      this.setState({
         isDisabled: e ? false : true
      })
   }

   render() {
      let tableWidth = this.state.distance * 20;
      let tableStyle = {
         width: tableWidth + "px"
      };
      let columnStyle = {
         width: tableWidth / 10,
         textAlign: 'left'
      };
      return(
         <div className="container-fluid">
            <Header />
            <main className="mainContainer">
               <CarsBoxes cars={this.state.cars} />
               <h2 className="text-center">Place cars into race</h2>
               <div className="allScale">
                  <div className="scalePart">
                     <table className="col-md-8 md-offset-2 table table-bordered" style={tableStyle}>
                        <tbody>
                           <tr scope="row" className="scaleHeading">
                              <th style={columnStyle}></th>
                              <th style={columnStyle}><span className="thText">1xN</span></th>
                              <th style={columnStyle}><span className="thText">2xN</span></th>
                              <th style={columnStyle}><span className="thText">3xN</span></th>
                              <th style={columnStyle}><span className="thText">4xN</span></th>
                              <th style={columnStyle}><span className="thText">5xN</span></th>
                              <th style={columnStyle}><span className="thText">6xN</span></th>
                              <th style={columnStyle}><span className="thText">7xN</span></th>
                              <th style={columnStyle}><span className="thText">8xN</span></th>
                              <th style={columnStyle}><span className="thText">9xN</span></th>
                           </tr>
                           {
                              this.props.selectedCarsArray.map((selectedCar, index) => {
                                 return <OnRace key={index} image={selectedCar.image} />  
                              })
                           }
                        </tbody>
                     </table>
                  </div>
                  <div className="scalePart">
                     <div className="wrapSpeedLimits col-md-8 md-offset-2">
                        {
                           this.state.trafficLights.map((trafficL, index) => {
                              return <TrafficLights
                                 key={index} 
                                 distance={this.state.distance}
                                 tableWidth={this.state.tableWidth}
                                 position={trafficL.position}
                                 duration={trafficL.duration}
                              />
                           })
                        }
                        
                        <SpeedLimits 
                           speedLimits={this.state.speedLimits} 
                           distance={this.state.distance}
                           tableWidth={this.state.tableWidth}
                        />
                     </div>
                     {
                        this.props.selectedCarsArray.length > 0 ?
                        <div className="raceButtons form-inline aligner">
                           {/*Race Duration Input*/}
                           <input 
                              className="form-control raceInput"
                              type="number"
                              placeholder="Race duration"
                              onChange={(e) => this.onChangeRaceDuration(e.target.value)}
                           />
                           {/*Start Button*/}
                           <button
                              className="btn startBtn"
                              onClick={this.startRace}
                              disabled={this.state.isDisabled}
                           >
                              Start
                           </button>
                           {/*Reset Button*/}
                           <button 
                              className="btn btn-secondary"
                              onClick={this.resetCars}
                           >
                              Reset
                           </button>
                        </div>
                        :
                        null
                     }
                     
                  </div>
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

function mapDispatchToProps(dispatch) {
   return {
      resetCarsAction: () => {
         resetCarsAction(dispatch);
      }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);