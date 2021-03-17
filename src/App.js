import './App.css';
import Map from "./modules/Map";

import { TILE_TYPES } from "./misc/constants";

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <Map tiles={tiles}/>
      </header>
    </div>
  );
}

export default App;
