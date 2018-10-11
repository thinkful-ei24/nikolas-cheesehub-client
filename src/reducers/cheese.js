const initialState = {
	cheeses: ["AMERICAN"],
	loading: false,
	error: null
};

const cheeseReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_CHEESES_REQUEST":
			return Object.assign({}, state, {
				loading: true
			});
		case "GET_CHEESES_ERROR":
			return Object.assign({}, state, {
				loading: false,
				error: true
			});
		case "GET_CHEESES":
			return Object.assign({}, state, {
				loading: false,
				cheeses: [...state.cheeses, ...action.value]
			});
		default:
			return state;
	}
};

export default cheeseReducer;
