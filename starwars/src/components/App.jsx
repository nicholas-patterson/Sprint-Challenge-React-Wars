import React, { useState, useEffect } from "react";
import "../../src/App.css";
import axios from "axios";
import CharacterList from "./CharacterList";
import { Menu } from "semantic-ui-react";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setPeople(res.data.results));
  }, []);

  console.log("people in App:", people);

  return (
    <div className="App">
      <Menu inverted>
        <h1 className="Header">React Wars</h1>
      </Menu>
      <CharacterList data={people} />
    </div>
  );
};

export default App;
