let initialState = {
	selectedCarsArray: []
};

export default function homeReducer(state = initialState, action){
	let selected = state.selectedCarsArray;
	switch(action.type) {
	   case 'SELECT_CARS':
         state = Object.assign({}, state, {
				selectedCarsArray: selected.length === 3 ? selected :
				selected.concat(action.payload)
				// After each click add new item to array - selectedCarsArray
			});
			break;
		case 'RESET_CARS':
			state = Object.assign({}, state, {
				selectedCarsArray: []
			});
			break;
	}
	return state;
}