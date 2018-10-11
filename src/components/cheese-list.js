import React, { Component } from "react";

export default function CheeseList(props) {
	return (
		<ul>
			{props.cheeses.map(cheese => (
				<li>{cheese}</li>
			))}
		</ul>
	);
}
