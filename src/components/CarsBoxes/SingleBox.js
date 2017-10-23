import React from 'react';
import { connect } from 'react-redux';

// Actions
import { selectCarAction } from '../../actions/homeActions';

class SingleBox extends React.Component {
   onClickBox(selectedId) {
      let filtered = this.props.filteredCars.filter((filteredCar, index) => {
         return filteredCar.id === selectedId
      });

      // Max three selected cars
      let numOfSelectedCars = this.props.selectedCarsArray.length;

      //Action call
      this.props.selectCarAction(numOfSelectedCars === 3 ? [] : filtered);
   }

   render(){
      return(
         <div
            className="SingleBox col-md-4"
            onClick={this.onClickBox.bind(this, this.props.id)}
         >
            <div className="wrapSingle col-md-8 offset-md-2">
               <h4>{this.props.name}</h4>
               <img src={this.props.image} alt={this.props.name} className="img-fluid" />
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