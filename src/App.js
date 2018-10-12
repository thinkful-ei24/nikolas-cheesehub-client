import React, { Component } from "react";
import "./App.css";
import CheeseList from "./components/cheese-list";
import { connect } from "react-redux";
import { getCheesesActionAsync } from "./actions/cheese";

class App extends Component {
	componentDidMount() {
		this.props.dispatch(getCheesesActionAsync());
	}

	render() {
		return (
			<div className="App">
				<CheeseList cheeses={this.props.cheeses} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {
		cheeses: state.cheeseReducer.cheeses
	};
}

export default connect(mapStateToProps)(App);
