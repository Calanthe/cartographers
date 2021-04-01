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
                  <p className="cartographers__logo">CARTOGRAPHERS</p>
                  <p className="cartographers__subtitle">map generator</p>
              </header>
              <Map tiles={this.state.tiles}/>
              <GenerateMapBtn onGenerateMap={this.handleGenerateMap.bind(this)}/>
          </div>
      );
  };
}

export default App;
