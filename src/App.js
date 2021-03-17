import './App.css';
import Map from "./modules/Map";
import GenerateMapBtn from "./modules/GenerateMapBtn"

import { TILE_TYPES } from "./misc/constants";

function App() { //TODO use React class?
  let tiles = [
    [
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[1]
      },
      {
        type: TILE_TYPES[1]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[2]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[3]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      }
    ],
    [
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[1]
      },
      {
        type: TILE_TYPES[1]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[2]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[3]
      },
      {
        type: TILE_TYPES[0]
      },
      {
        type: TILE_TYPES[0]
      }
    ]
  ];

  function handleGenerateMap() {
		console.log();
	};

  return (
    <div className="cartographers">
      <header className="cartographers__header">
        Cartographers map generator
      </header>
      <Map tiles={tiles}/>
      <GenerateMapBtn onGenerateMap={handleGenerateMap}/>
    </div>
  );
}

export default App;
