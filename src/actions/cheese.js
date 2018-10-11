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
	return fetch(process.env.REACT_APP_API_BASE_URL)
		.then(res => {
			return res.json();
		})
		.then(res => {
			return dispatch(fetchCheesesSuccess(res));
		})
		.catch(err => dispatch(fetchCheesesError(err)));
};
