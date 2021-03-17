import React from "react";
//import classNames from "classnames";

export default function Map(props) {
	let tiles = props.tiles,
		mapSpaces = [];

	tiles.forEach((tileRow, i) => {
		tileRow.forEach((tile, j) => {
			console.log(tile, i, j)
			const tileClass = tile.type,
				uniqueKey = i + '-' + j;
				/*tileClassName = classNames(
					"tile",
					typeClass
				),
				tileClassName = "ddd";*/

			mapSpaces.push(
				<div
					className={tileClass}
					key={uniqueKey.toString()}
				></div>
			);
		});
	});

	return (
		<div className="map">
			{mapSpaces}
		</div>
	);
};