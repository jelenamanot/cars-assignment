import React from 'react';
import { connect } from 'react-redux';

// Actions
import { selectCarAction } from '../../actions/homeActions';

class SingleBox extends React.Component {
   onClickBox(selectedId) {
      let filtered = this.props.filteredCars.filter((filteredCar, index) => {
         return filteredCar.id === selectedId
      });

      //Action call
      this.props.selectCarAction(filtered);
   }

   render(){
      return(
         <div
            className="SingleBox col-md-4"
            onClick={this.onClickBox.bind(this, this.props.id)}
         >
            {/*---FRONT CARD---*/}
            <div className="front wrapSingle col-md-8 offset-md-2">
               <h4>{this.props.name}</h4>
               <img src={this.props.image} alt={this.props.name} className="img-fluid" />
            </div>

            {/*---BACK CARD---*/}
            <div className="back wrapSingle col-md-8 offset-md-2 row">
               <div className="col-md-12">
                  <h4>{this.props.name}</h4>
               </div>
               <div className="row">
                  <div className="col-md-6"> 
                     <img src={this.props.image} alt={this.props.name} className="darkenImg" />
                  </div>
                  <div className="col-md-6">
                     <h4>{this.props.speed} <span className="kmh">km/h</span></h4>
                  </div>
               </div>
               <div className="col-md-12">
                  <p className="text-justify">{this.props.desc}</p>
               </div>
            </div>

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
      selectCarAction: (change) => {
         selectCarAction(dispatch, change);
      }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBox);