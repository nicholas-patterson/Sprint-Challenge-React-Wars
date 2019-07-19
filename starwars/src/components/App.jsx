import React, { useState, useEffect } from "react";
import "../../src/App.css";
import axios from "axios";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const Header = styled.h1`
  color: #eee;
  text-shadow: 1px 1px 5px #fff;
  width: 100;
  height: 70px;
  background: black;
  margin: 0;
  padding-top: 20px;
  box-shadow: 2px 2px 10px white;
`;

const List = styled.div`
  background: rgba(235, 235, 235, 0.5);
  width: 50%;
  margin: 0 auto;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [dog, setDog] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setPeople(res.data.results));
  }, []);

  return (
    <div className="App">
      <Header>
        {" "}
        <div className="Header">React Wars</div>
      </Header>
      <List>
        <CharacterList data={people} />
      </List>
    </div>
  );
};

export default App;
