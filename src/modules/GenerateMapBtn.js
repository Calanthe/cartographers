import React from "react";

export default function GenerateMapBtn(props) {
	return (
		<div className="cartographers__button-wrapper">
			<button className="cartographers__button" onClick={props.onGenerateMap}>Generate a new map</button>
		</div>
	);
};