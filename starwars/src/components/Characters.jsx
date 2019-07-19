import React from "react";

const Characters = ({ people }) => {
  console.log(people);
  return <h1>{people.name}</h1>;
};

export default Characters;
