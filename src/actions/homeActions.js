// Select cars for race
export function selectCarAction(dispatch, payload) {
   dispatch({
      type: 'SELECT_CARS',
      payload
   });
};

// Reset cars for race
export function resetCarsAction(dispatch) {
   dispatch({
      type: 'RESET_CARS'
   });
};