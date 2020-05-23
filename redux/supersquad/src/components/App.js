import React from "react";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import SquadStats from "./SquadStats";
import "../styles/index.css";

function App(props) {
  return (
    <div className="App">
      <h2>SuperSquad</h2>
      <div className="row">
        <div className="col">
          <CharacterList />
        </div>
        <div className="col">
          <HeroList />
        </div>
        <div className="col">
          <SquadStats />
        </div>
      </div>
    </div>
  );
}

export default App;
