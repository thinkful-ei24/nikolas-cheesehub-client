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
	return fetch("http://localhost:8080/api/cheeses")
		.then(res => {
			return res.json();
		})
		.then(res => {
			return dispatch(fetchCheesesSuccess(res));
		})
		.catch(err => dispatch(fetchCheesesError(err)));
};
