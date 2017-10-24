let initialState = {
	selectedCarsArray: []
};

export default function homeReducer(state = initialState, action){
	switch(action.type) {
	   case 'SELECT_CARS':
         state = Object.assign({}, state, {
				selectedCarsArray: state.selectedCarsArray.concat(action.payload)
				// After each click add new item to array - selectedCarsArray
			});
         break;
	}
	return state;
}