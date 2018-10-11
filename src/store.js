import cheeseReducer from "./reducers/cheese";
import { createStore } from "../../../../AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
	cheeseReducer,
	composeEnhancers(applyMiddleware(thunk))
);
