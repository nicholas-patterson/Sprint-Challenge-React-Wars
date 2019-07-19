import React from "react";
import Characters from "./Characters";

const CharacterList = ({ data }) => {
  console.log("persons in Character List", data);
  return data.map(people => {
    return <Characters people={people} key={people.name} />;
  });
};

export default CharacterList;
