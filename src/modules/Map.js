import React from "react";
import classNames from "classnames";

export default function Map(props) {
	let tiles = props.tiles,
	mapTiles = [];

	tiles.forEach((tileColumn, i) => {
		tileColumn.forEach((tile, j) => {
			const typeClass = 'cartographers__tile--' + tile.type,
				uniqueKey = i + '-' + j,
				tileClassName = classNames(
					"cartographers__tile",
					typeClass
				);

				mapTiles.push(
				<div
					className={tileClassName}
					key={uniqueKey.toString()}
				>
					{tile.type === 'wasteland' ? 1 : tile.type === 'mountain' ? 2 : tile.type === 'ruin' ? 3 : 0}
				</div>
			);
		});
	});

	return (
		<div className="cartographers__map">
			{mapTiles}
		</div>
	);
};