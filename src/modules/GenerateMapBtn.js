import React from "react";

export default function GenerateMapBtn(props) {
	return (
		<div className="cartographers__button">
			<button onClick={props.onGenerateMap}>generate new map</button>
		</div>
	);
};