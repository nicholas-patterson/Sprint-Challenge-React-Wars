import React from "react";
import Characters from "./Characters";

const CharacterList = ({ data }) => {
  return data.map(people => {
    return <Characters people={people} key={people.name} />;
  });
};

export default CharacterList;
