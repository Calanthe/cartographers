import './App.css';
import React from "react";
import Map from "./modules/Map";
import GenerateMapBtn from "./modules/GenerateMapBtn"

import { GenerateMap } from "./misc/helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: GenerateMap()
    };
  };

  handleGenerateMap() {
		GenerateMap();
	};

  render() {
    return (
      <div className="cartographers">
        <header className="cartographers__header">
          Cartographers map generator
        </header>
        <Map tiles={this.state.tiles}/>
        <GenerateMapBtn onGenerateMap={this.handleGenerateMap}/>
      </div>
    );
  };
}

export default App;
