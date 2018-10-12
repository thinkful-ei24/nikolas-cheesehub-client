export const fetchCheesesSuccess = value => {
	return {
		type: "GET_CHEESES",
		value
	};
};

export const fetchCheesesError = value => {
	return {
		type: "GET_CHEESES_ERROR",
		value
	};
};

export const fetchCheesesRequest = value => {
	return {
		type: "GET_CHEESES_REQUEST",
		value
	};
};

export const getCheesesActionAsync = value => dispatch => {
	dispatch(fetchCheesesRequest());
	fetch("https://cheesehubserver.herokuapp.com/api/cheeses")
		.then(res => res.json())
		.then(res => dispatch(fetchCheesesSuccess(res)))
		.catch(err => dispatch(fetchCheesesError(err)));
};
