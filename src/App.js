import './App.css';
import React from "react";
import Map from "./modules/Map";
import GenerateMapBtn from "./modules/GenerateMapBtn"

import { GenerateMap } from "./misc/mapGenerator";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: GenerateMap()
        };
    };

  handleGenerateMap() {
      this.setState({
        tiles: GenerateMap()
      })
	};

  render() {
      return (
          <div className="cartographers">
              <header className="cartographers__header">
                  Cartographers map generator
              </header>
              <Map tiles={this.state.tiles}/>
              <GenerateMapBtn onGenerateMap={this.handleGenerateMap.bind(this)}/>
          </div>
      );
  };
}

export default App;
